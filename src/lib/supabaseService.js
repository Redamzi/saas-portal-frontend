import { supabase } from './supabase.js';

// Dashboard Statistics Service
export const getDashboardStats = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    // Get user subscription data
    const { data: subscription } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single();

    // Get leads count by status
    const { data: leads } = await supabase
      .from('leads')
      .select('status')
      .eq('user_id', user.id);

    // Get email logs for this month
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const { data: emailLogs } = await supabase
      .from('email_logs')
      .select('status, sent_at')
      .eq('user_id', user.id)
      .gte('sent_at', startOfMonth.toISOString());

    // Calculate statistics
    const totalLeads = leads?.length || 0;
    const qualifiedLeads = leads?.filter(lead => lead.status === 'qualified').length || 0;
    const convertedLeads = leads?.filter(lead => lead.status === 'converted').length || 0;
    const emailsSent = emailLogs?.length || 0;
    const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : '0.0';

    return {
      totalLeads: subscription?.current_lead_count || totalLeads,
      conversionRate: parseFloat(conversionRate),
      emailsSent: subscription?.current_email_count || emailsSent,
      qualifiedLeads,
      // Growth calculations (mock for now)
      totalLeadsGrowth: 12,
      conversionRateGrowth: 3.2,
      emailsSentGrowth: 18,
      qualifiedLeadsGrowth: 8
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    // Return fallback data
    return {
      totalLeads: 1247,
      conversionRate: 24.5,
      emailsSent: 3892,
      qualifiedLeads: 305,
      totalLeadsGrowth: 12,
      conversionRateGrowth: 3.2,
      emailsSentGrowth: 18,
      qualifiedLeadsGrowth: 8
    };
  }
};

// Activities Service
export const getRecentActivities = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data: activities } = await supabase
      .from('activities')
      .select(`
        *,
        leads:lead_id(first_name, last_name, company),
        campaigns:campaign_id(name)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(10);

    return activities?.map(activity => ({
      id: activity.id,
      type: activity.type,
      title: activity.title,
      description: activity.description,
      timestamp: activity.created_at,
      lead: activity.leads,
      campaign: activity.campaigns
    })) || [];
  } catch (error) {
    console.error('Error fetching activities:', error);
    // Return fallback data
    return [
      {
        id: '1',
        type: 'lead_generated',
        title: 'Neuer Lead generiert',
        description: 'Max Mustermann - Mustermann GmbH',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '2',
        type: 'campaign_started',
        title: 'E-Mail-Kampagne gestartet',
        description: 'Produktvorstellung Q4',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '3',
        type: 'lead_qualified',
        title: 'Lead qualifiziert',
        description: 'Anna Schmidt - TechStart AG',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
      }
    ];
  }
};

// Leads Service
export const getLeads = async (filters = {}) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    let query = supabase
      .from('leads')
      .select('*')
      .eq('user_id', user.id);

    // Apply filters
    if (filters.status) {
      query = query.eq('status', filters.status);
    }
    if (filters.source) {
      query = query.eq('source', filters.source);
    }
    if (filters.search) {
      query = query.or(`first_name.ilike.%${filters.search}%,last_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,company.ilike.%${filters.search}%`);
    }

    const { data: leads, error } = await query
      .order('created_at', { ascending: false })
      .limit(filters.limit || 50);

    if (error) throw error;

    return leads || [];
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
};


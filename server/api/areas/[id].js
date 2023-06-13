import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const area = event.context.params.id;

  const { data, error } = await client
    .from('projects')
    .select(`*`)
    .eq('area', area)

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});

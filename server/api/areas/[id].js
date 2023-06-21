import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const area = event.context.params.id;

  const { data, error } = await client
    .from('areas')
    .select(`id, name, description, projects(id, projectTitle, mainIdea, city, areas(name))`)
    .eq('name', area)
    .limit(1)
    .single();  

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});

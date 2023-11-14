import { supabase } from "$lib/supabaseClient";
/** @type {import('./$types').PageServerLoad} */
  export async function load()  {
        const {data}= await supabase
  			.from('articles')
              .select(`
            *,
            articlestatus(*),
            authors(*),
            categories(*),
            post_type(*),
            publication(*)
          `).eq('publication_id', 3).eq('post_type', 2).eq('status', 3)
        return { 
                data,
        }
    }
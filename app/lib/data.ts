import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

const supabase = createServerComponentClient({ cookies });

export const fetchUsers = async () => {
    const { data } = await supabase
        .from('users')
        .select('*, providers(*)')
        .order('created_at', { ascending: false });

    return data;
};

export const fetchProviders = async () => {
    const { data } = await supabase
        .from('providers')
        .select('*')
        .order('created_at', { ascending: false });

    return data;
};

export const deleteUserById = async (id: number) => {
    await supabase
        .from('users')
        .delete()
        .eq('id', id);
};

export const checkIfEmailIsValid = async (email: string) => {
    const { data } = await supabase
        .from('users')
        .select()
        .eq('email', email)
        .limit(1);
    return !data?.length;
};
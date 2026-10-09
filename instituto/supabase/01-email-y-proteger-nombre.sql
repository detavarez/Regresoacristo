alter table public.estudiantes add column if not exists email text;
alter table public.maestros add column if not exists email text;
alter table public.admins add column if not exists email text;

update public.estudiantes t set email = u.email from auth.users u where u.id = t.user_id;
update public.maestros t set email = u.email from auth.users u where u.id = t.user_id;
update public.admins t set email = u.email from auth.users u where u.id = t.user_id;

create or replace function public.sync_email_desde_auth()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  update public.estudiantes set email = new.email where user_id = new.id;
  update public.maestros set email = new.email where user_id = new.id;
  update public.admins set email = new.email where user_id = new.id;
  return new;
end $$;

drop trigger if exists on_auth_email_change on auth.users;
create trigger on_auth_email_change
after update of email on auth.users
for each row when (old.email is distinct from new.email)
execute function public.sync_email_desde_auth();

create or replace function public.llenar_email_nuevo()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.email is null then
    select email into new.email from auth.users where id = new.user_id;
  end if;
  return new;
end $$;

drop trigger if exists llenar_email_estudiantes on public.estudiantes;
create trigger llenar_email_estudiantes before insert on public.estudiantes for each row execute function public.llenar_email_nuevo();
drop trigger if exists llenar_email_maestros on public.maestros;
create trigger llenar_email_maestros before insert on public.maestros for each row execute function public.llenar_email_nuevo();
drop trigger if exists llenar_email_admins on public.admins;
create trigger llenar_email_admins before insert on public.admins for each row execute function public.llenar_email_nuevo();

create or replace function public.proteger_campos_estudiante()
returns trigger language plpgsql as $$
begin
  if auth.uid() is not null and auth.uid() = old.user_id then
    new.nombre := old.nombre;
    new.email := old.email;
  end if;
  return new;
end $$;

drop trigger if exists proteger_estudiante on public.estudiantes;
create trigger proteger_estudiante
before update on public.estudiantes
for each row execute function public.proteger_campos_estudiante();

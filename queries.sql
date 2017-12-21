select now();


select 
	ts.id as id, 
    ts.first_name as first_name, 
    ts.last_name as last_name, 
    ts.address_line_1 as address_line_1, 
    ts.address_line_2 as address_line_2, 
    ts.city as city, 
    ts.state as state, 
    ts.country as country, 
    ts.telephone as telephone,
    ts.description as description, 
    ts.terms_and_conditions as terms_and_conditions,
	tjr.role as job_role,
    tp.created_date as created_date,
    tp.is_active as is_active,
	tg.path as profile_pic,
    tp.rating as rating
from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg
where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id
order by 16 desc;


select
tsk.description
from trn_stylist ts, trn_skill tsk, trn_stylist_skill tss
where ts.profile_id = tss.stylist_id and tss.skill_id = tsk.id and ts.profile_id=1;


select tl.city as city, tl.state as state
from trn_location tl, trn_preferred_location tpl
where tl.id = tpl.location_id and tpl.stylist_id = 1;


select 
	ts.id as id, 
    ts.first_name as first_name, 
    ts.last_name as last_name, 
    ts.address_line_1 as address_line_1, 
    ts.address_line_2 as address_line_2, 
    ts.city as city, 
    ts.state as state, 
    ts.country as country, 
    ts.telephone as telephone,
    ts.description as description, 
    ts.terms_and_conditions as terms_and_conditions,
	tjr.role as job_role,
    tp.created_date as created_date,
    tp.is_active as is_active,
	tg.path as profile_pic,
    tp.rating as rating
from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg
where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id and 'Bridal' in (select sk.description from trn_skill sk, trn_stylist_skill tss where tss.stylist_id = ts.profile_id and tss.skill_id = sk.id)
order by 16 desc;


select name, charge, currency
from trn_charge_per_slot tcps, trn_time_slot tts
where tcps.time_slot_id = tts.id and tcps.stylist_id = 2;

select
	distinct tbd.id as id,
    tts.name as name,
    tcps.charge as charge,
    tcps.currency as currency,
    tbd.type as type,
    tbd.date as date
from trn_time_slot tts, trn_busy_date tbd, trn_charge_per_slot tcps
where tbd.time_slot_id = tts.id and tcps.time_slot_id = tbd.time_slot_id and tcps.stylist_id = tbd.stylist_id and tbd.stylist_id = 1;
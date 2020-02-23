CREATE TABLE prueba(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    numero INT(10)
);

insert into visita(fecha, hora, estado, direccion_iddireccion, generador_id_email_generador, operario_id_email_operario) values ('2019-10-11', '09:30', 'pendiente', 1, 'pepito@gmail.com', 'juanito@gmail.com');

select U.id_email_usuario, U.nombre, U.apellido, G.puntos from usuario U, generador G where U.id_email_usuario = G.usuario_id_email_usuario and U.estado = "activo" order by G.puntos DESC;

select 
 u.nombre,
 u.apellido, 
 d.ciudad,
 d.direccion,
 d.departamento,
 v.fecha,
 v.hora,
 v.foto_residuos,
 v.foto_residuos_dos
 from usuario as u inner join generador as g on u.id_email_usuario = g.usuario_id_email_usuario
 inner join direccion as d on g.id_email_generador = d.generador_id_email_generador
 inner join visita as v on d.iddireccion = v.direccion_iddireccion;

select 
 r.tipo
 from usuario as u inner join generador as g on u.id_email_usuario = g.usuario_id_email_usuario
 inner join direccion as d on g.id_email_generador = d.generador_id_email_generador
 inner join visita as v on d.iddireccion = v.direccion_iddireccion 
 inner join residuo as r on v.idvisita = r.visita_idvisita;


insert into whereat.utilizador values (0,"Ruizinho","ruiui@gmail.com","atum", false,"https://i.imgur.com/G5t255n.jpg",919932438);

insert into whereat.utilizador values (1,"Luis Binge","binge@gmail.com","atumTambem", false,"https://i.imgur.com/4clqUdj.jpg",967678932);

insert into whereat.codigo_postal values ("4480-912","VILA DO CONDE");
insert into whereat.codigo_postal values ("4490-042","PÓVOA DE VARZIM");

insert into whereat.comentario values (0,0,"Adorei o serviço foi bestial!",5,"2020-01-20 15:30:25");

insert into whereat.comentario values (1,1,"ORE WAOCHIN-CHIN GA DAISUKI NANDAYO",1,"2004-01-20 15:30:25");

insert into whereat.comentario values (1,0,"Adorei, ajudou imenso na minha dieta",4,"2020-01-23 19:10:25");

insert into whereat.restaurante values (2,"McDonalds Circunvalação","CIRCO","https://i.imgur.com/94V0H5c.jpg","Melhor Mac da Vila","morada",true,"4480-912",true,"circo_incorporated@gmail.com");

insert into whereat.restaurante values (1,"Arvoredo da Comida","treeEESS","https://i.imgur.com/Dkd9ICQ.jpg","É mais pesado quando entra do que quando sai!","morada qualquer",true,"4490-042",true,"treerestaurant@gmail.com");

insert into whereat.contacto values (0, 969903432);

insert into whereat.contacto values (1, 967392057);

insert into whereat.foto values (0, 0, "https://i.imgur.com/jBFy2Hz.jpg");

insert into whereat.foto values (0, 1, "https://i.imgur.com/3Eyox6u.jpg");

insert into whereat.foto values (0, 2, "https://i.imgur.com/7CMeL7u.jpg");

insert into whereat.foto values (1, 0, "https://i.imgur.com/7CMeL7u.jpg");

insert into whereat.foto values (1, 1, "sdgs");

insert into whereat.mesa values (1, 0, 2);

insert into whereat.mesa values (1, 1, 2);

insert into whereat.mesa values (1, 2, 1);

insert into whereat.prato values (0, 0, 1.99, "Moelas", 0);

insert into whereat.prato values (0, 1, 1.60, "Coca-Cola", 1);

insert into whereat.prato values (1, 1, 1.00, "Água", 1);

insert into whereat.reserva values ("2020-01-16 13:12:05", 0, 0, 2, "2020-01-15 20:45:25", true, true);

insert into whereat.reserva values ("2020-01-16 13:12:05", 0, 1, 0, "2020-01-15 20:45:25", true, true);

insert into whereat.reserva values ("2020-01-16 13:12:05", 1, 1, 1, "2020-01-15 20:45:25", true, true);

insert into tag values (0, "Fast Food");

insert into tag values (1, "Luxo");

insert into tag values (2, "Italiano");

insert into restaurante_tag values (0, 0, true);

insert into restaurante_tag values (1, 1, false);

insert into restaurante_tag values (1, 2, true);

insert into utilizador_tag values (0,0);

insert into utilizador_tag values (1,0);

insert into utilizador_tag values (1,1);

insert into utilizador_tag values (0,2);

insert into prato values (3, 1, 6.00, "Spaghetti", 2);
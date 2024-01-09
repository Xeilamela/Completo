let textos_ES={

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'',
    'SQL_KO':'',
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'ERROR_UPLOAD_foto_persona_KO':'La foto de persona debe tener extension jpg o jpeg y tamaño menor de 200000',
    'controlador_invalido':'',
    'action_invalido':'',

    // mensajes de la entidad persona
    // ---------------------------------

    // atributos lirbos (usados en el titulo de la tabla de presentación de datos)

    'CodigoL':'Codigo',
    'AutoresL':'Autor',
    'TituloL':'Título',
    'ISBN':'ISBN',
    'PagIniL':'Pag inicial',
    'PagFinL':'Pag Final',
    'VolumenL':'VolumenL',
    'EditorialL':'Editorial',
    'FechaPublicacionL':'FechaPublicacionL',
    'EditorL':'Editor',
    'PaisEdicionL':'País edición',
    'archivopdfL':'archivo PDF',

   // atributos technicalreport (usados en el titulo de la tabla de presentación de datos)

   'CodigoTR':'Codigo',
   'AutoresTR':'Autor',
   'TituloTR':'Título',
   'DepartamentoTR':'Departamento',
   'UniversidadTR':'Universidad',
   'FicheropdfTR':'Fichero PDF',
   'FechaTR':'Fecha',
    // label atributos libro
    
    'label_autor_libro':'Introduzca Autor : ',
    'label_titulo_libro':'Introduzca Título : ',
    'label_ISBN_libro':'Introduzca ISBN : ',
    'label_PagIniL_libro':'Introduzca página inicial : ',
    'label_PagFinL_libro':'Introduzca página final : ',
    'label_volumen_libro':'Introduzca volumen : ',
    'label_editorialL_libro':'Introduzca editorial : ',
    'label_editorial_libro':'Introduzca editorial : ',
    'label_fecha_libro':'Introduzca fecha : ',
    'label_editor_libro':'Introduzca editor : ',
    'label_pais_edicion_libro':'Introduzca país edición : ',
    'label_archivo_pdf':'Introduzca pdf : ',

     // label atributos technicalreport
    
     'label_CodigoTR':'Código : ',
     'label_AutoresTR':'Introduzca Nombre : ',
     'label_TituloTR':'Introduzca Título : ',
     'label_DepartamentoTR':'Introduzca departamento : ',
     'label_UniversidadTR':'Introduzca la universidad : ',
    'label_FicheropdfTR':'Introduzca pdf : ',
    'label_FechaTR':'Introduzca fecha : ',
 



    // titulos formularios acciones

    "titulo_form_ADD_libro":"Incorporar un libro",
    "titulo_form_EDIT_libro":"Modicar persona",
    "titulo_form_DELETE_libro":"Confirmar borrar una persona",
    "titulo_form_SEARCH_libro":"Buscar un libro",
    "titulo_form_SHOWCURRENT_libro":"Ver detalle de un libro",

        // titulos formularios acciones

        "titulo_form_ADD_technicalreport":"Añadir technicalreport",
        "titulo_form_EDIT_technicalreport":"Modicar technicalreport",
        "titulo_form_DELETE_technicalreport":"Confirmar borrar un technicareport",
        "titulo_form_SEARCH_technicaleport":"Buscar un technicalreport",
        "titulo_form_SHOWCURRENT_technicalreport":"Ver detalle de un technicalreport",
   
    // errores de formato de persona en front

    //CodigoL(search)
    "KO_CodigoL_numeric":"código no numérico",
    "KO_CodigoL_tam_max":"Código peta máximo",

    // nombre_autor
    "KO_autor_libro_tam_min":"nombre autor peta minimo",
    "KO_autor_libro_tam_max":"nombre autor peta maximo",

    // titulo
    "KO_titulo_libro_tam_min":"título peta minimo",
    "KO_titulo_libro_tam_max":"título peta maximo",

    // ISBN
    "KO_ISBN_tam_min":"ISBN peta minimo",
    "KO_ISBN_tam_max":"ISBN peta maximo",   
    "KO_ISBN_numeric":"ISBN no numérico",

    //PagIniL
    "KO_PagIniL_tam_max":"PagIni peta maximo",
    "KO_PagIniL_numeric": "PagIni no numérico",

    //PagFinL
  
    "KO_PagFinL_tam_max":"PagFin peta maximo",
    "KO_PagFinL_numeric":"PagFin no numérico",    

    //VolumenL
    "KO_VolumenL_tam_max":"Volumen peta maximo",
    "KO_VolumenL_numeric":"Volumen no numérico",    

    //EditorialL
    "KO_EditorialL_tam_max":"Editorial peta maximo",

    //FechaPublicacionL
    "KO_FechaPublicacionL_tam_min":"Fecha Publicacion peta minimo",
    "KO_FechaPublicacionL_mayor_hoy": "Fecha mayor al día de hoy",

    //EditorL
    "KO_EditorL_tam_max":"Editor peta maximo",

    //PaisEdicionL
    "KO_PaisEdicionL_tam_min":"Pais edicion peta minimo",
    "KO_PaisEdicionL_tam_max":"Pais edicion peta maximo",

    //archivopdfL
    "KO_archivopdfL_tam_min":"Archivo pdf peta minimo",
    "KO_archivopdfL_tam_max":"Archivo pdf peta maximo",

 //CodigoTR(search)
        "KO_CodigoTR_numeric":"código no numérico",
        "KO_CodigoTR_tam_max":"Código peta máximo",
    // nombre_autor
 "KO_AutoresTR_tam_min":"nombre autor peta minimo",
 "KO_AutoresTR_tam_max":"nombre autor peta maximo",

 // titulo
 "KO_TituloTR_tam_min":"título peta minimo",
 "KO_TituloTR_tam_max":"título peta maximo",

 // Departamento
 "KO_DepartamentoTR_tam_min":"Departamento peta minimo",
 "KO_DepartamentoTR_tam_max":"Departamento peta maximo",   

 //Universidad
 "KO_UniversidadTR_tam_max":"Universidad peta maximo",
 "KO_UniversidadTR_tam_min": "Universidad peta minimo",

 //Fichero
 "KO_FicheropdfTR_tam_max":"Fichero peta maximo",
 "KO_FicheropdfTR_tam_min":"Fichero peta minimo",    


 //FechaPublicacionTR
 "KO_FechaTR_tam_min":"Fecha Technicalreport peta minimo",
 "KO_FechaTR_mayor_hoy": "Fecha mayor al día de hoy",

};


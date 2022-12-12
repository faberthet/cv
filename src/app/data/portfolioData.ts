import { Project } from "../models/project";

export const Projects: Project[] = [
    {
        name:'Breizh jardin vivant',
        languages:['angular','java','typescript', 'css'],
        source: 'https://github.com/faberthet/bjv-front-end',
        info: 'Mon tout premier projet Angular et Spring Boot. Site web pour l\'auto entreprise Breizh jardin vivant',
        picture:'bjv.jpg',
        demo:'https://youtu.be/58JBlvOXVvs',
        website:'https://breizh-jardinvivant.com/'
    },
    {
        name:'Breizh Jardin (back-end)',
        languages:['angular','java','typescript', 'css'],
        source: 'https://github.com/faberthet/bjv-backend',
        info: 'Partie création d\'articles du site web Breizh Jardin vivant',
        picture:'bjvcrud.jpg',
        demo:'https://youtu.be/EJsv0Or4Adg',
        website:''
    },
    {
        name:'Mots croisés',
        languages:['java','typescript', 'css'],
        source: 'https://github.com/faberthet/MotCroises',
        info: 'Mon tout dernier projet Java à l\'université, utilisant Java FX',
        picture:'mot1.jpg',
        demo:'https://drive.google.com/file/d/1OBjtPZnd4cNwq7GAXpGnx4FAuSIvLgC6/view',
        website:''
    },
    {
        name:'Mon CV',
        languages:['angular','typescript', 'css'],
        source: 'https://github.com/faberthet/cv',
        info: 'Mon cv développé avec Angular',
        picture:'cv.jpg',
        demo:'',
        website:''
    },
    {
        name:'lorem.fr',
        languages:['typescript', 'css'],
        source: 'google.com',
        info: 'truk machin bidule',
        picture:'/image.jpg',
        demo:'',
        website:''
    },
    {
        name:'lorem.fr',
        languages:['typescript', 'css'],
        source: 'google.com',
        info: 'truk machin bidule',
        picture:'/image.jpg',
        demo:'',
        website:''
    }
]
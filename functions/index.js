const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()

let authData= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'venezuelatravel.users@gmail.com',
        pass: 'guacamaya123.'
    }
});

exports.sendEmailNotification=functions.firestore.document('users/{docId}')
.onCreate((snap,ctx)=>{


    const data=snap.data();

    authData.sendMail({
        from: 'info.truly@makethatapp.com',
        to: data.email,
        subject: '¡Tu Viaje está Listo!',
        text: '¡Hola, ' +data.name +'! Tenemos el placer de informarte que tu itinerario ha sido creado. Puedes revisarlo en nuestra página web utilizando el código: '+ data.itinerario + ' ¡Gracias por reservar con nosotros!',
        html: '<h3>¡Hola, ' +data.name +'!</h3><br>Tenemos el placer de informarte que tu itinerario ha sido creado.<br>Puedes revisarlo en nuestra página web utilizando el código: '+ data.itinerario + '<br><br>¡Gracias por reservar con nosotros!'
    }).then(res=>console.log('Succesfuly sent that mail')).catch(
        err=>console.log(err)
    );
})
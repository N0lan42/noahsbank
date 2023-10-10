const admin = require("firebase-admin");
const signInWithPopup = require("firebase-admin");
const serviceAccount = require("./serviceKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//firebase service acount pk
const type               = "service_account";
const project_id         = "badbankcap-425be";
const private_key        = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4hAhr0Mvt5WLo\nqtQQuw+519KFujGtzwqgFHUNJfpxM6jzozEbMg9ZQC+Y4vpsL/bm37R6BwSs/S+5\nvPkolYGdUnMUJzkyXpIc/EfZg9228XC3EuzudhQwEnO8Eb78MoSLskdcNrKxhQRW\no5+sA9WWVDyQ7+WNiSbjQY3+Dgmenos0G7d8U1pSl4Sb5Jawevc12QYXneaXyKfo\nKZy9E9tkgCfUNmirVB2LPjcD4aNdFJl0WWRTrC7xfSMhWbftRXnOIek/627uO27C\n5mOpXYkxSqfhoOxm+BCj9A3PVtTZvLc94n9OYwZGQONSAcIpIkM0mkpcUnJvUL/E\nKDCqvypBAgMBAAECggEAB2UPO1buXVXknWN/RT5h9nY+UyqvpAIYsGqxeDnt7AyA\neGcxaCAc+lw2rB9ont5bPEx53KwcVVx+RajbqXM4cxgjUYry4WBl5bB8pqyAvby2\nYjfpc/MagwSyS7bAWzYhFsIp1vnANpoYnupG02uB61jr5nkez4nQG6p8aNKiMw+h\nBxW4aVCZlGBh/iYCXSr2B6oaZ1prWhsr/q8g5WjvFRM9NII3vbMRdk2ehdOEaYAl\nWtNSd3OjfAT4Oo0fKW9Q5RGXnvQk5Orsws5tg95RFmeoiROO5NlD92LzkYXdD/Wy\n5ylBHIyI6Q+X7nej2eme3fsDccqNhYsvWqt+hJ9vgQKBgQDzewZ4s8yj1yf/07t9\nFPVx6LodfQPhTIVUHJFQzDV+kPWP1V7eE6yo9fTCNiuqJ3npgPVWsCMr5jjS3YtY\n/a1gfAGVRlOQlrKSbvvyuHRDSviTdYZZLu3ZUysHiJxuRpGUM7cYUUxSnuWuqGty\nKYNhcSaoMWjovMmZw0Ri6Gq6MQKBgQDCANgVmX8rWUbWpux5QVT2Wh6ohduxtm1H\nCn+hH9Dpqrg68CG9L7kU1VDIiLMTLtMWMpTnsnAEfZn2vQW2Qwdskd8m8LKjapt1\nq9zDqaEzHY+i/sjA5EycIarczlyUTf1KoBvg18r5FybdtwfhanLMjeeUP6xYnN6v\nTSxmMBVdEQKBgQDhaAOVut64z3c4X8wzADQ6QDoNEq+E5FKKi+f75RGhGpI7lk09\nSvmNciYlpgDGhcVXZwu6NVZaTchNbsySlkbsC+FrULAMK3cmGZkmG52GruFxolu+\nNLP9fgFX+CDZ9nrPuRDIcns2AeSgzUqrZcM7coVXMGbvD9eTgjLNXl1wAQKBgQCb\nvhm6nVNd9XnM8Ix+e1g9vPNHzs4jyJPJqD/1lZkdPRRRHF25hwpKE0Wa90Lrb3e+\nJjUsHC+ZK0virLRdMUpQenpuxGRklDzhJmtAGHl0k5KwA2IemCh4Xv7P7EqeNE3X\nDtnSkuo7Nb7Z1wnYiKBIXtM+TC+Lo8ORb57pGkjMQQKBgAFk2l2oww2+a01HLnoY\n03iT0udnHx+wZ8bGERP/sagwVYsbjz8jlFnHwxa0sD7r92mkIEf5Rhh8MdPPDSqN\nvm7ANOCWTVhwPW89exgbAaK/0K4PDNVJOS7WaZVNKSi2PUEE7yzp6QV6HPtyKAc9\n9mo445UXQ5XqAEHRyptIuEqh\n-----END PRIVATE KEY-----\n" ;
const private_key_id     = "b9054240165e4a1653ab07cac4d60510f34bf8b0";
const client_email       = "firebase-adminsdk-hj7b5@badbankcap-425be.iam.gserviceaccount.com";
const client_id          = "103285174477716964436";
const auth_uri           = "https://accounts.google.com/o/oauth2/auth";
const token_uri          = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hj7b5%40badbankcap-425be.iam.gserviceaccount.com";
/*
// credential grants acces to Firebase services
admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
            private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url,
    }),
});
*/
module.exports = admin;
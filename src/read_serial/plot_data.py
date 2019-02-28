from firebase import firebase
firebase = firebase.FirebaseApplication('https://prova-8e97f.firebaseio.com/', None)
result = firebase.get('/users', None)
print result



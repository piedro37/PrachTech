import firebase from 'firebase/clientApp'

export default async (req, res) => {
	const {
		query,
		method,
	  } = req

	console.log(method)
	
	await 
		firebase
			.firestore()
			.collection('test')
			.doc(query.id)
			.get()
			.then((doc) => {
				res.json(doc.data());
			})
			.catch((error) => {
				res.json({ error });
			});
};

//http://localhost:3000/api/test/91oVMsan7RMRA1I6dZ7h
//https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/pages/api/user/%5Bid%5D.js
//https://leerob.io/blog/nextjs-firebase-serverless
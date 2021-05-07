import  MD5  from 'crypto-js/md5'


const { REACT_APP_API_ENDPOINT, REACT_APP_API_PUBLIC_KEY, REACT_APP_API_PRIVATE_KEY } = process.env
export const getData = async (id?: string, method = 'GET'): Promise<any> =>{
   const date = new Date().getTime();
   const hash = MD5(date + REACT_APP_API_PRIVATE_KEY!  + REACT_APP_API_PUBLIC_KEY ).toString();
    
   const request = await fetch(`${REACT_APP_API_ENDPOINT}${id}?ts=${date}&apikey=${REACT_APP_API_PUBLIC_KEY}&hash=${hash}`,
      {
        method,
        headers:{
          'Content-Type': 'application/json',
        }
      }
   );

   return await request.json()
}


export default function baseURl(){
  const inDevelopment = window.location.hostname == 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
}

import Header from "./components/Header";
import Footer from "./components/footer";
import Main from "./components/main";
function App (){
  return (  
  <>
  
    
   <Header />   {/* يطلع فوق */}
      <Main />     {/* فيه Home، يكون تحت */}
      <Footer />  
 
  </>

  ) ;

}
export default App;
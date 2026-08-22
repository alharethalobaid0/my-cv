import { createSignal } from "solid-js";
import { createContext } from "solid-js";
import { useContext } from "solid-js";


const AppContext = createContext();

export function AppProvider(props){

  const [num ,setNum] = createSignal(0);

  const context = {
    num,setNum,
  }
  return(
    <>
    <AppContext.Provider value={context}>
      {props.children}
      </AppContext.Provider>
    </>
  );
}

export function useAppContext(){

  return useContext(AppContext);
}
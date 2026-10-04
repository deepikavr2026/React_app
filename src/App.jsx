import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import MountCounter from "./lifeCycleMethod/Mounting"
import About from "./lifeCycleMethod/reactRouterDomcpm/About"
import LinkComponent from "./lifeCycleMethod/reactRouterDomcpm/LinkComponent"
import UnMounting from "./lifeCycleMethod/UnMounting"
import UpdatingCounter from "./lifeCycleMethod/Updating"
import Home from "./lifeCycleMethod/reactRouterDomcpm/Home"
import Test from "./lifeCycleMethod/reactRouterDomcpm/Test"
import UseStateHock from "./components/UseStateHock"
import ShowHide from "./components/ShowHide"
import Togglefunc from "./components/Togglefunc"
import ChangeBackground from "./components/ChangeBackground"
import LiveState from "./components/LiveState"
import useEffect from "./components/UseStateHock"
import UseEffectCount from "./components/Hooks/useEffect/UseEffectCount"
import UseEffectHook from "./components/Hooks/useEffect/UseEffectHook"
import UseEffectApi from "./components/Hooks/useEffect/UseEffectApi"
import Parent from "./components/props/Parent"
import Child from "./components/props/Child"
import PropsDrilling from "./components/props/PropsDrilling"
import ParentData from "./components/props/PropsDrilling"
import UserData from "./components/Hooks/useContext/UserData"
import Crud from "./components/Form/Crud"
import UnControlledComponents from "./components/Hooks/useEffect/useRef/UnControlledComponents"
import WithOutMemoExample from "./components/Hooks/useMemo/WithOutMemoExample"
import CallbackExample from "./components/Hooks/useMemo/CallbackExample"
import MemoExample from "./useContext/Hooks/useMemo/MemoExample"





function App() {

  return (
    <>
    {/* <MountCounter/> */}
    {/* <UpdatingCounter/> */}
    {/* <UnMounting/> */}
    
    <BrowserRouter>
    <Routes>
      {/* <Route path="/"element={<ClassComp/>}/>
      <Route path="/classCounter" element={<ClassCounter/>}/> */}

      {/* react router dom */}

      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<About/>}/>

      <Route path="/useState" element={<UseStateHock/>}/>
      <Route path="/show" element={<ShowHide/>}/>
      <Route path="/toggle" element={<Togglefunc/>}/>
      <Route path="/background" element={<ChangeBackground/>}/>
      <Route path="/live" element={<LiveState/>}/>

      <Route path="/useEffect" element={<UseEffectHook/>}/>
      <Route path="/useEffect" element={<UseEffectCount/>}/>
      <Route path="/useEffect" element={<UseEffectApi/>}/>

      <Route path="/props" element={<Parent/>}/>
      <Route path="/propsdrilling" element={<ParentData/>}/>
      <Route path="/context" element={<UserData/>}/>
      
      <Route path="/context" element={<UserData/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Form" element={<Crud/>}/>
      <Route path="/useRef" element={<useEffect/>}/>
      <Route path="/Hooks" element={<WithOutMemoExample/>}/>
      <Route path="/Hooks" element={<CallbackExample/>}/>
      <Route path="/Hooks" element={<MemoExample/>}/>



    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App


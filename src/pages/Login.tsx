import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiPanel,
  EuiProvider,
  EuiSpacer,
  EuiText,
  EuiTextColor,
} from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import React from "react";
import animation from "../assets/animation.gif";
import wLogo from "../assets/wLogo.png";
import { firebaseAuth, userRef } from "../utils/FirebaseConfig";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/slices/AuthSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const login = async ()=>{
    const provider = new GoogleAuthProvider()
    const {user:{displayName,email,uid},} = await signInWithPopup(firebaseAuth,provider);
    if(email){
      const firestoreQuery = query(userRef, where("uid","==",uid))
      const fetchedUsers = await getDocs(firestoreQuery)
      if(fetchedUsers.docs.length === 0){
        //if no user doc then we add
        await addDoc(userRef,{
          uid,
          name:displayName,
          email
        })
      }
    }
    dispatch(setUser({uid,name:displayName,email}))
    navigate("/")
  }


  return (
    <EuiProvider colorMode="dark">
      <EuiFlexGroup
        alignItems="center"
        justifyContent="center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize="xl">
            <EuiFlexGroup justifyContent="center" alignItems="center">
              <EuiFlexItem>
                <EuiImage src={animation} alt="screen-animation"></EuiImage>
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiImage src={wLogo} alt="logo" size="230px"></EuiImage>
                <EuiSpacer size="xs" />
                <EuiText textAlign="center" grow={false}>
                  <h3>
                    <EuiTextColor>One Platform to</EuiTextColor>
                    <EuiTextColor color="#ED7373"> connect</EuiTextColor>
                  </h3>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiButton fill onClick={login}>Login with Google</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default Login;

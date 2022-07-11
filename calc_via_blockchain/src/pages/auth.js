import { AppConfig, UserSession, showConnect, openContractDeploy } from "@stacks/connect-react";
import { StacksTestnet, StacksMainnet } from "@stacks/network";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

const testnet = new StacksTestnet();
const mainnet = new StacksMainnet();


export function authenticate() {
  showConnect({
    appDetails: {
      name: "Calc Blockchain",
      icon: window.location.origin + "/pages/assets/logo.svg",
    },
    redirectTo: '/calc',
    onFinish: () => {
      let userData = userSession.loadUserData();
      window.location.replace('/calc')
      console.log(userSession.loadUserData().profile.stxAddress.testnet);
    },
    userSession: userSession,
  });
}


export async function Deployfunctions(formularname, formulars){
  
  const codeBody = formulars;

  openContractDeploy({
    contractName: formularname,
    codeBody,
    appDetails: {
      name: "Calc",
      icon: window.location.origin + "/logo.svg",
    },
    onFinish: (data) => {
      console.log("Stacks Transaction:", data.stacksTransaction);
      console.log("Transaction ID:", data.txId);
      console.log("Raw transaction:", data.txRaw);
    },
  });  
}

export function logout(){
  userSession.signUserOut();
  window.location.replace('/');
}
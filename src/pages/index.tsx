import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Box, Button, CssBaseline, TextField } from '@material-ui/core';
import { swapTokens } from '@/utils';

export default function Home() {
	const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] = useState(false);
	const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);
	const [tokenIn, setTokenIn] = useState<string>("")
  const [tokenOut, setTokenOut] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [error, setError] = useState<string>("")
 


	const closeAll = () => {
		setIsNetworkSwitchHighlighted(false);
		setIsConnectHighlighted(false);
	};
	return (
    <>
    <CssBaseline />
   <main className={styles.main}>
      <Box sx={{height: 50}}>
         <h2>Swap Tokens</h2>
      </Box>
       <w3m-button />
      <Box sx={{height: '25%'}}>
         <TextField onChange={(e) => setTokenIn(e.target.value)} style={{width: 500, margin: 5}}
                    label="0x...." variant="outlined" helperText="Token IN" onFocus={() => setError("")}
                    />
         <TextField onChange={(e) => setTokenOut(e.target.value)} style={{width: 500, margin: 5}}
                    label="0x...." variant="outlined" helperText="Token OUT" onFocus={() => setError("")}
                    />
      </Box>
      <Box sx={{height: '25%'}}>
        <TextField onChange={(e) => setAmount(e.target.value)} style={{width: 500, margin: 5}}
                   label="enter amount" variant="outlined" helperText="Amount" onFocus={() => setError("")}
                   />
      </Box>
      <Box>
        <Button variant='contained' color='primary' style={{margin: 5}}
                onClick={() => swapTokens(tokenIn, tokenOut, amount, setError)}>Swap Tokens
        </Button>
      </Box>
    
      
      <Box>{error}</Box>
   
    </main>
    </>
	);
}

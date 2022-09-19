import Head from "next/head";
import { Box } from "@mui/material";

import styles from "../../styles/Home.module.css";
import Content from "./Content";
import LeftNavbar from "./LeftNavBar";
import Main from "./main";

const Dashboard = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba Tecnica</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className={styles.container}>
        <Box sx={{ display: "flex" }}>
          <LeftNavbar />
          <Main {...props} />
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;

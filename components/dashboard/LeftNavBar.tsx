import React from "react";
import Link from "next/link";
import {
  Business,
  Dashboard,
  ExpandLess,
  ExpandMore,
  RoomService,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import useSideNav from "./useSideNav";

const LinkItem = ({ href, icon, label, onClick }: any) => {
  return (
    <>
      <Link href={href} passHref>
        <ListItem button onClick={onClick}>
          <ListItemIcon>{icon || null}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      </Link>
    </>
  );
};

const LeftNavbar = (props: any) => {
  const { setCheckout } = props;
  const { open, onOpen } = useSideNav();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <LinkItem href="/orders" label="Crear orden" icon={<Dashboard />} />

          <LinkItem
            href="/settings/service"
            label="Servicios"
            icon={<RoomService />}
          />
          <LinkItem
            href="/settings/permission"
            label="Niveles de acceso"
            icon={<Business />}
          />
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftNavbar;

import { useState } from 'react'
import { List, ListItemButton, ListItemText, ListItemIcon, Collapse   } from "@mui/material";
import {ExpandLess, ExpandMore } from '@mui/icons-material';

interface SubMenu {
    nome: string,
    icon: JSX.Element
}

interface Props {
    Text : string,
    Icon : JSX.Element,
    SubMenu: SubMenu[]
}

const ListMenu = (props: Props) => {
  const[open, setOpen] = useState(false);

  const openSubmenu = () =>{
    setOpen(!open)
  }
  return (
    <>
    {props.SubMenu.length > 0 ?
    <>
      <ListItemButton onClick={openSubmenu}>
        <ListItemIcon>
            {props.Icon}
        </ListItemIcon>
        <ListItemText primary={props.Text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.SubMenu.map((item) =>(
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.nome} primaryTypographyProps={{
                fontSize: 15,
              }}/>
            </ListItemButton>
          ))}            
        </List>
      </Collapse>
    </>
    :
    <ListItemButton>
      <ListItemIcon>
          {props.Icon}
      </ListItemIcon>
      <ListItemText primary={props.Text} />
    </ListItemButton>
    }     
    </>
  )
}

export default ListMenu

import React, { useEffect, useState } from 'react';
import API from '../../Common/API/API';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const SideBar = ({ articleId }) => {
    const [WikiTitles, setWikiTitles] = useState();

    useEffect(() => {
        API.fetchWikiMenu()
            .then(res => {
                setWikiTitles(res.data);
            })
            .catch(err => console.log(err));
    }, [articleId]);

    return (
        <div>
            <nav aria-label="main mailbox folders">
                <List>
                    {WikiTitles && WikiTitles.map((article, index) => {
                        return (
                            <div>
                                {article._id !== articleId ? (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton component={Link} to={`/wiki/${article._id}`} >
                                            <ListItemText primary={article.title} />
                                        </ListItemButton>
                                    </ListItem>) : null}
                            </div>
                        )
                    })}
                </List>
            </nav>


        </div>
    );
};

export default SideBar;
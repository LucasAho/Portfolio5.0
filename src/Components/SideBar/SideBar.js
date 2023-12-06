import React, { useEffect, useState } from 'react';
import API from '../../Common/API/API';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';



const WikiPage = ({ articleId }) => {
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
            <nav aria-label="main">
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
}

const BlogPage = ({ articleId }) => {
    const [blogTitles, setBlogTitles] = useState();

    useEffect(() => {
        API.fetchBlogMenu()
            .then(res => {
                setBlogTitles(res.data);
            })
            .catch(err => console.log(err));
    }, [articleId]);

    return (
        <div>
            <nav>
                <List>
                    {blogTitles && blogTitles.map((article, index) => {
                        return (
                            <div>
                                {article._id !== articleId ? (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton component={Link} to={`/blog/${article._id}`} >
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
}

const SideBar = ({ articleId, wiki, blog }) => {
    if (wiki) return <WikiPage articleId={articleId} />
    else if (blog) return <BlogPage articleId={articleId} />
};

export default SideBar;
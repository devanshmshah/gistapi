import React, { useEffect, useState } from 'react';
import { Octokit } from "@octokit/rest";
import {CodeIcon,RepoForkedIcon,CommentIcon,StarFillIcon, FileIcon} from '@primer/octicons-react'

const octokit = new Octokit();


const GistList = ({gists}) => {

//     const [gists,setGists] = useState([]);
//     useEffect(()=>{
//         async function getGists() {
            
            
            
//             console.log(await octokit.rest.gists.listForUser({
//             username:props.username,
//         }))
        
//     }


   
//     if(props.username){getGists()}
// }
// ,[]);




    return (
        <ol>
        {gists.map((gist, i) => (
      <li key={i}>{gist.url}</li>
    ))}
    </ol>
    )
}

export default GistList

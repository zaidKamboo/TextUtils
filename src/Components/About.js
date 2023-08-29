export default function About(props) {
    // const [darkModeStyle,setDarkModeStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '2px solid black'
    // })
    // const [btnText,setBtnText] = useState('Enable dark mode');
    // const toggleStyle = ()=>{
    //     if(darkModeStyle.color === 'white'){
    //         setDarkModeStyle ({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '2px solid black'
    //         })
    //         setBtnText('Enable Dark mode')
    //     }
    //     else{
    //         setDarkModeStyle ({
    //             color : 'white',
    //             backgroundColor : 'gray',
    //             border : '2px solid white'
    //         })
    //         setBtnText('Enable Light mode')
    //     }
    // }
//     #042743 
    return (
       <>
                <strong><h2 className='container my-3' style={{backgroundColor : props.mode ==='dark'?'#042743':'white',color : props.mode ==='dark'?'white':'black',textAlign:"center"}}>About us</h2></strong>
      <div className='container' style={{backgroundColor : props.mode ==='dark'?'gray':'white',color : props.mode ==='dark'?'white':' #042743 '}}>
                  <div className="accordion accordion-flush" id="accordionFlushExample" >
                        <div className="accordion-item " style= {{backgroundColor : props.mode ==='dark'?'gray':'white',color : props.mode ==='dark'?'white':'#043743'}} >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, natus?   
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorem, neque molestias deleniti, et voluptatum molestiae beatae perferendis accusamus alias sapiente exercitationem, adipisci vitae saepe possimus? Reiciendis explicabo numquam ipsam voluptas nesciunt magni similique ipsa, quaerat omnis eos adipisci natus architecto quidem consectetur iste doloremque! Lorem ipsum 
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil suscipit eos ipsum repellendus eius at alias doloremque a, quasi saepe corrupti autem voluptates. Perspiciatis magnam in ipsa, alias voluptatum minima dolorem voluptatibus temporibus, hic necessitatibus ab, vero nobis? Quidem dolorum magnam mollitia nostrum, et vel dignissimos consequatur quia labore nihil? 
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, voluptate deserunt. Quod omnis incidunt quos. Beatae aliquid nihil ipsum aliquam dolore delectus maxime explicabo quo soluta, vero inventore odit nisi? Sapiente adipisci fugiat nisi perspiciatis facere eos delectus placeat, magnam, accusantium corrupti nulla labore voluptatem eius culpa ut cupiditate provident.
                              Lorem ipsu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dicta repellendus officiis.
                              m dolor sit amet consectetur, adipisicing elit. Aperiam, voluptate deserunt. Quod omnis incidunt quos. Beatae aliquid nihil ipsum aliquam dolore delectus maxime explicabo quo soluta, vero inventore odit nisi? Sapiente adipisci fugiat nisi perspiciatis facere eos delectus placeat, magnam, accusantium corrupti nulla labore voluptatem eius culpa ut cupiditate provident.
                        </div>
                  </div>
                  {/* <button type='button' onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button> */}
      </div>
    </>
  )
}

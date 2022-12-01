import text from './img/text.png'
import fra from './img/Frame.png'
import blo1 from './img/blo1.png'
import Q1 from './img/Q1.png'
import blo2 from './img/blo2.png'
import dow from './img/dow.png'
import moon from './img/moon.png'
import q2 from './img/q2.png'
import q3 from './img/q3.png'
import qw from './img/qw.png'
import r2 from './img/r2.png'
import r22 from './img/r22.png'
import sun from './img/sun.png'

// import t from './img/t.png'
// import t2 from './img/t2.png'
// import t3 from './img/t3.png'
// import t4 from './img/t4.png'
// import t5 from './img/t5.png'
// import t6 from './img/t6.png'
// import t7 from './img/t7.png'
// import t8 from './img/t8.png'
// import z1 from './img/z1.png'

export default function Main(){
    return(
        <div>
                <div class="b1">
                <div class="text">
                    <img src={text} alt="text" />
                    <div class="capital">The future of digital photos.</div>
                    <div class="smoll">The H(app)y app is the latest & greatest 
                        in phone photography.
                        It's available in the App Store right now. 
                        Go check it out!</div>
                    <div class="but">
                        <button > <div class="osh">Download</div> </button>
                        <button ><div class="osh"> Read more</div></button>
                    </div>
                </div>
                <div class="photo"><img src={fra} alt="img"/></div>
            </div>


            <div class="b2">
                <div class="had">
                    <div class="fea">Features</div>
                    <div class="latest">The latest & greatest in phone photography.</div>
                </div>





                <div class="r1">
                    <div class="wb">
                        <div class="blo"><img src={blo1} alt="blo1"/></div>
                        <div class="ca"><img src={Q1} alt="f"/></div>
                        <div class="t1">Calendar view</div>
                        <div class="y">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</div>
                    </div>
                    <div class="wb">
                        <div class="blo"><img src={blo2} alt="blo2"/></div>
                        <div class="ca"><img src={q2} alt="e"/></div>
                        <div class="t2">Lists</div>
                        <div class="y">Dolor sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</div>
                    </div>
                    <div class="wb">
                        <div class="blo"><img src={blo1} alt="blo3"/></div>
                        <div class="ca"><img src={q3} alt="h"/></div>
                        <div class="t3">Varied type</div>
                        <div class="y">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue.</div>
                    </div>
                </div>






                <div class="r2">
                    <div class="wb">
                        <div class="blo"><img src={r2} alt="blo1"/></div>
                        <div class="ca"><img src={Q1} alt="f"/></div>
                        <div class="t4">Split-screen</div>
                        <div class="y">Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.</div>
                    </div>
                    <div class="wb">
                        <div class="blo"><img src={blo1} alt="blo2"/></div>
                        <div class="ca"><img src={q2} alt="e"/></div>
                        <div class="t5">Uploads</div>
                        <div class="y">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</div>
                    </div>
                    <div class="wb">
                        <div class="blo"><img src={r22} alt="blo3"/></div>
                        <div class="ca"><img src={q3} alt="h"/></div>
                        <div class="t6">Focus mode</div>
                        <div class="y">Lorem sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</div>
                    </div>
                </div>
            </div>
            <div class="orang">
                <div class="a1"> 
                    <div class="ac">400+</div>
                    <div class="or" >pictures analyzed</div>
                </div>
                <div class="a1">
                    <div class="ac">25+</div>
                    <div class="or" >Operations per minute</div>
                </div>
                <div class="a1">
                    <div class="ac">95%</div>
                    <div class="or" >accuracy</div>
                </div>
            </div>
            <div class="dark">
                <div class="n1">
                    Dark mode
                </div>
                <div class="n2">
                    Also available in dark.
                </div>
                <div class="n3">
                    Don't get blinded when using the H(app)y app at night, just turn off the lights. Lorem ipsum dolor sit amet.
                </div>
                <div class="n4">
                    <img src={qw} alt="ero"/>
                </div>
                <div class="n6">
                    <div class="sun"><img src={sun} alt="sun"/></div>
                    <div class="moon"><img src={moon} alt="moon"/></div>
                </div>

            </div>
            <div class="down">
                <div class="z1">Download</div>
                <div class="z2">It's available right now!</div>
                <div class="z3">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</div>
                <div class="z4"><img src={dow} alt="dow  "/></div>
            </div>
            <div class="aldam">
                <div class="m1">FAQ</div>


                <div class="m2">Some questions & some answers</div>


                <div class="m3">
                    <div class="m">
                        <div class="o">What devices does H(app)y support?</div>
                        <div class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</div>
                    </div>
                    <div class="m">
                        <div class="o">How many megapixels does H(app)y support?</div>
                        <div class="p">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</div>
                    </div>
                </div>


                <div class="m4">
                    <div class="m">
                        <div class="o">Will my photos magically be more beautiful if I use this app?</div>
                        <div class="p">Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit.</div>
                    </div>
                    <div class="m">
                        <div class="o">How many photos can I store in H(app)y?</div>
                        <div class="p">Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
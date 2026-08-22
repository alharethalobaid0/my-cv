import { createSignal } from 'solid-js';
import "./Test.css";
export default function Test() {


  return (
    <>
      <br />
  <div class="sidebar split left">
      <img class="img" src="https://imgs.search.brave.com/Qz68pnHIiCKnWRcJQ9Lwz68egDHoDotGcqPBgFCbws0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZXBpY3R1/cmUuYWkvcmV2aWV3/cy9wZnBfMy53ZWJw" />
        
          <h4>Alhareth Alobaid</h4>
        <h5>Computer science student</h5>
        
        <br />
        
      <div class="contact">
        <h6 class="hname">Contact</h6>
          <p class="info">📧 alharethalobaid0@gmail.com</p>
          <a class="info" href="https://github.com/alharethalobaid0/">~~my github</a>
          <p></p>
          <a href="https://www.instagram.com/alharethalobaid/">~~my instagram</a>
        </div>

        <br />

        <div class="skills">
          <h6 class="hname">Skills</h6>
        <p class="skillname">HTML/CSS</p>
      <p class="skillname">Java script/TypeScript</p>
          <p class="skillname">TailWind/DaisyUI</p>
      <p class="skillname">C++</p>    
        </div>

        <br />

        <div class="languages">
          <h6 class="hname">languages</h6>
      <p class="lang">Arabic--native</p>
      <p class="lang">English--fluent</p> 
        </div>

  </div>
      

      <div class="sidebar splitr right">

        <div class="about">
          <h6 class="hname">About</h6>
          <p>CS student building web apps with SolidJS and Supabase. Looking for an internship where I can grow as a developer and ship real features.</p>
        </div>

        <br />

        

        <div class="projects">
          <h5 class="hname">Projects</h5>
          <p class="pname"><a href="https://alhareth-treats.vercel.app/">alhareth treats</a></p>
          <p class="pdsc">A small dessert showcase site — three featured pastries with photos, flavor descriptions, and pricing, built as a clean product-catalog layout.</p>
          
          <p class="pname"><a href="https://kfc-alternitive-page.vercel.app/">kfc alternitive</a></p>
          <p class="pdsc">A fast-food ordering concept site styled after KFC — a menu of combo meals (buckets, burgers, waffle box) each with image, description, and a "Buy Now" CTA, plus offers/exclusives nav sections.</p>

          <p class="pname"><a href="https://calories-calculater-zeta.vercel.app/">calories calculater</a></p>
          <p class="pdsc">A daily calorie needs calculator — takes gender, age, weight, height, and workout frequency, then computes an estimated kcal/day target.</p>

          <p class="pname"><a href="https://what-if-bbt.vercel.app/">what if bbt</a></p>
          <p class="pdsc">A branded landing page for a bubble-tea-meets-fried-chicken concept — highlights (fresh ingredients, signature sauces, fast service), a menu of stacked chicken sandwiches, and a promo offer section.</p>

          <p class="pname"><a href="https://check-in-gules-delta.vercel.app/">check in</a></p>
          <p class="pdsc">A multi-page restaurant site (Menu, Locations, About Us) for a fried-chicken/burger brand, with a hero section, menu categories, and social-proof stats (followers, rating, delivery partners).</p>
        </div>

        <p class="pname"><a href="https://github.com/alharethalobaid0/chip8-emulator">chip8 emulator*</a></p>
          <p class="pdsc">chip 8 emulator built in c++ "not web related"</p>

        <br />

        <div class="education">
          <h4 class="hname">Education</h4>
          <p>The Public Authority for Applied Education and Training</p>
          <p>2027</p>
        </div>
        
    </div>
    </>
  );
}

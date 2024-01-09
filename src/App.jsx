import {Hero, PopularProduct, Subscribe, SuperQuality,
Services, SpecialOffer,Footer,CustomerReview} from './sections'
import Nav from './components/Nav'

function App() {


  return (
    <main className=" relative">
      <Nav/>
      <section
        className="xl:padding-l
    wide:padding-r padding-b"
      >
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />{" "}
      </section>
      <section className=" bg-pale-blue padding">
        <CustomerReview />
      </section>
      
      <section
        className="padding-x 
    sm:py-3 py-16 w-full"
      ><Subscribe />
      </section>
      <section
        className=" bg-black padding-x
     padding-t pb-8">
      <Footer />
      </section>
    </main>
  );
}

export default App;
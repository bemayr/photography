import * as background from './background.jpg'
import * as me from './me.jpg'
import { css } from 'emotion'
import GatsbyLink from 'gatsby-link'
import * as React from 'react'
import styled from 'react-emotion'

const QuoteWrapper = styled('div')`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: white;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  flex-shrink: 0;
  > p {
    display: inline-block;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadein-delayed {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const DoubleQuotes = styled('div')`
  position: relative;
  ::before {
    content: '\\201c';
    font-size: 200px;
    font-weight: bold;
    position: absolute;
    left: -90px;
    top: -23px;
    animation: 2s ease 0s normal forwards 1 fadein-delayed;
  }
`

const Quote = styled('div')`
  > p {
    font-size: 46px;
    text-align: center;
    position: relative;
    animation: 4s ease 0s normal forwards 1 fadein-delayed;
  }
`

const Person = styled('p')`
  text-align: right;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 24px;
  margin-top: -14px;
  animation: 7s ease 0s normal forwards 1 fadein-delayed;
  ::before {
    content: '―';
    margin-right: 0.8em;
  }
`

const Heading = styled('h2')`
  font-family: 'Lato', sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  position: sticky;
  top: 300px; // TODO
  background: linear-gradient(to bottom, white 40%, transparent);
  padding: 0 0 50px 0;
  margin-top: 70px;
  margin-bottom: 0px;

  > span:first-child {
    font-weight: 300;
    margin-right: 3px;
  }
  > span:last-child {
    font-weight: 900;
  }
`

export const IndexPage = () => (
  <div
    id="landingpage-content"
    className={css`
      width: 100vw;
      height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36)),
        url(${background});
      background-size: cover;
      background-position-y: bottom;
      overflow: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    <QuoteWrapper>
      <Quote>
        <DoubleQuotes />
        <p>
          What I like about photographs is<br />that they capture a moment<br />that’s
          gone forever, impossible to<br />reproduce.
        </p>
      </Quote>
      <Person>Karl Lagerfeld</Person>
    </QuoteWrapper>
    <img
      src={me}
      alt="Bernhard Mayr"
      className={css`
        border-radius: 50%;
        border: calc(var(--border-width) * 1px) solid white;
        width: 200px;
        position: sticky;
        top: 50px;
        margin-bottom: 30px;
        z-index: 100;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 50px;
        transform: scale(var(--scale)) translateY(calc(var(--translateY) * 1px));
        transition: 0.05s linear;
      `}
    />
    <div
      className={css`
        background: white;
        border-radius: 9px;
        width: 100%;
        max-width: 960px;
        min-height: calc(100vh - 100px - 40px);
        position: sticky;
        top: 120px;
        margin-bottom: 40px;
        box-shadow: rgba(0, 0, 0, 0.6) 0 0 120px;
      `}
    />
    <script>console.log("yay");</script>
    <div
      className={css`
        position: sticky;
        top: 100px;
        max-width: 960px;
        min-height: calc(100vh - 100px);
        padding: 16px;
      `}
    >
      <Heading>
        <span>My</span>
        <span>Passion</span>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        facere sed blanditiis perferendis harum eaque amet. Excepturi, expedita
        aperiam accusamus cumque quam optio! Consequuntur culpa itaque
        aspernatur, optio quod temporibus.
      </p>
      <p>
        Corporis est voluptates doloribus sint reiciendis officiis aut minima
        recusandae facilis, cumque, obcaecati eos eius deleniti veritatis
        ducimus quisquam ex soluta praesentium. Eos, optio debitis iste
        blanditiis tempore est laudantium!
      </p>
      <p>
        Sapiente asperiores, assumenda repellat eum reiciendis rem reprehenderit
        dicta dolore et placeat quis dolorem accusamus provident dolor
        blanditiis. Cumque, accusantium. Rem ratione velit, amet consectetur
        dolorum eaque quaerat accusantium non!
      </p>
      <Heading>
        <span>My</span>
        <span>Pictures</span>
      </Heading>
      <p>
        Blanditiis rerum doloremque, amet pariatur consectetur molestias
        doloribus ea repudiandae consequatur soluta ullam quod numquam ut. Ullam
        eum iste nobis sapiente! Fugit dolores reiciendis neque rem adipisci
        explicabo molestiae quia!
      </p>
      <p>
        Expedita dolorum nulla voluptates perferendis nam nemo facilis est non
        vitae reprehenderit modi, ullam hic repellendus consequatur, unde
        officiis aspernatur odit incidunt sapiente iusto culpa. Odit cum aperiam
        autem voluptatibus?
      </p>
      <p>
        Doloremque magni totam, sequi et veniam odio eligendi consequuntur vero
        corporis velit facere necessitatibus cumque ipsa laudantium officia
        explicabo libero incidunt accusamus! Porro dolorum, ducimus ipsam
        perspiciatis nobis facere quia!
      </p>
      <p>
        Quasi beatae in facilis ex deserunt nisi maiores asperiores aperiam
        similique quia. Ullam tempora aliquid velit quo reiciendis? Culpa,
        architecto debitis perspiciatis alias reprehenderit sunt veritatis quo
        corporis ex non.
      </p>
      <p>
        Qui voluptatum ab deleniti dicta recusandae hic. Iure nam sapiente
        commodi eveniet omnis tenetur maiores aut, sit neque itaque sunt
        repellat nisi eaque deserunt culpa harum quibusdam! Laboriosam, odio
        dolores.
      </p>
      <Heading>
        <span>My</span>
        <span>Equipment</span>
      </Heading>
      <p>
        Eos earum pariatur maxime, animi deserunt aspernatur suscipit quis nobis
        laudantium. Iure nostrum hic quia? Nemo nostrum labore sint
        exercitationem hic harum facilis laboriosam aliquid repellendus veniam.
        Illo, aliquid quisquam.
      </p>
      <p>
        Harum consequatur, molestiae, veniam distinctio molestias et quasi saepe
        blanditiis officia suscipit maiores consectetur? Voluptatem excepturi
        earum vel nostrum fugit fuga possimus? Eos modi quisquam non cumque ea
        pariatur odit!
      </p>
      <p>
        Autem excepturi, fugit, aliquid quaerat explicabo quidem saepe at facere
        laborum, quam dolorum impedit. Culpa saepe sit, animi soluta quaerat
        molestiae natus amet necessitatibus beatae vero consequatur quia? Id,
        ut!
      </p>
      <p>
        Hic architecto fugit iste quisquam qui tenetur placeat eos praesentium
        id! Nostrum, officia fugiat. Facere sit neque minus, at eveniet in hic
        sunt possimus animi, cumque id suscipit eaque sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolor, reprehenderit itaque corporis deserunt iste incidunt, accusamus
        qui ratione eaque laboriosam ea voluptatum, repellendus pariatur ducimus
        at adipisci officia vitae!
      </p>
      <p>
        Culpa quis, magni dignissimos reprehenderit quas rem tempora voluptate?
        Sapiente quam fuga cupiditate libero a numquam. Magni ab porro illum
        dolorum impedit laudantium, accusamus explicabo, nihil facilis,
        molestiae quam id!
      </p>
      <Heading>
        <span>My</span>
        <span>Homepage</span>
      </Heading>
      <p>
        Explicabo, ab. Nulla deleniti at, nam, dicta modi incidunt dolor fuga
        nihil eum provident repudiandae! Quis expedita ipsam rerum delectus,
        quisquam a. Enim earum quos explicabo, adipisci optio totam dolore.
      </p>
      <p>
        Perferendis eum tempore distinctio autem, officia id, suscipit
        dignissimos ad maiores doloremque voluptatibus, beatae ratione libero.
        Quasi iste blanditiis dolor soluta consectetur illum quibusdam officia
        quod, vitae, vel, praesentium asperiores?
      </p>
      <p>
        Atque commodi dolore assumenda id odio nobis expedita laboriosam
        deserunt unde, quaerat facere earum vero maxime error, aperiam labore
        aliquam, corporis fugiat necessitatibus fuga! Dignissimos natus minima
        accusamus sed dicta?
      </p>
      <p>
        Voluptas natus ducimus saepe voluptatibus cum fugiat est placeat, veniam
        porro quasi sunt aliquam perferendis autem. Dolores facere, explicabo
        dolorum magni animi laudantium suscipit deserunt odit ullam quas ut
        magnam!
      </p>
      <p>
        Harum corporis cum excepturi! Nihil assumenda dolorem blanditiis nobis
        expedita tempora neque in fuga hic, necessitatibus nisi similique quidem
        modi? Dolores accusamus repellat non, expedita quia sequi molestias
        voluptate atque.
      </p>
      <p>
        Aperiam, ea, magni saepe, autem ipsam cum a temporibus iure assumenda
        rerum neque? Aliquid est harum officia voluptas nisi necessitatibus
        officiis accusantium eos, molestias ad iure optio sit dolore soluta.
      </p>
      <p>
        Ducimus necessitatibus sit non enim dignissimos voluptate, consectetur
        laboriosam corporis quos debitis sint veritatis, totam, sapiente
        architecto tenetur? Molestias voluptatem earum hic suscipit
        exercitationem enim numquam! Itaque accusantium rerum quas.
      </p>
      <p>
        Est quis inventore, tempora repellat maiores repellendus maxime iusto
        necessitatibus ipsum commodi corporis nostrum fugiat obcaecati dolor
        eius autem excepturi dolorum numquam! Quis fugit libero iusto magnam hic
        blanditiis exercitationem.
      </p>
    </div>
  </div>
)

export default IndexPage

import React from 'react';
import ParentComponent from './concept/PureComponent/ParentComponent';
import RefsComponent from './concept/Refs/RefsComponent';
import RefOnClass from './concept/Refs/RefOnClass';
import ForwardRefParent from './concept/Refs/ForwardRefParent';
import Portals from './concept/Portals/Portals';
import Villans from './concept/Error Boundary/Villans';
import ErrorBoundary from './concept/Error Boundary/ErrorBoundary';
import ClickCounter from './concept/HOC/clickCounter';
import HoverCounter from './concept/HOC/hoverCounter';
import Counter from './concept/Render props/Counter';
import Click from './concept/Render props/Click';
import Hover from './concept/Render props/Hover';
import Container from './concept/Context/Container';
import Heading from './Heading';

function Home() {
  return (
    <div >
      <div>
        <h2 >
          <center> <span style={{ color: 'Red', backgroundColor: 'yellow' }}>
            React - Concepts</span> </center>
        </h2>
      </div>

      <Heading>
        Pure Component
      </Heading>

      <ParentComponent />
      <Heading>
        Ref
      </Heading>
      <RefsComponent />
      <br />
      <RefOnClass />
      <br />
      <Heading>
        Forward Ref
      </Heading>
      <ForwardRefParent />
      <br />
      <Portals />
      <br />

      {/* <ErrorBoundary>
        <Villans villan="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Villans villan="batman" />
      </ErrorBoundary> */}
      <Heading>
        Higher Order Component
      </Heading>
      <ClickCounter />
      <HoverCounter />
      <br />
      <Heading>
        Render Props
      </Heading>
      <Counter
        renderProp={(count, handleInc) => (
          <Click count={count} handleInc={handleInc} />
        )} />
      <Counter
        renderProp={(count, handleInc) => (
          <Hover count={count} handleInc={handleInc} />
        )} />

      <br />
      <Heading>
        Context
      </Heading>
      <Container />
    </div>

  );
}

export default Home;

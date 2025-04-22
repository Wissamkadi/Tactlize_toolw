import '../styles/JavaCCDetails.css';
import CodeBlock1 from '../styles/icons/CodeBlock1.png';
import CodeBlock2 from '../styles/icons/CodeBlock2.png';
import CodeBlock3 from '../styles/icons/CodeBlock3.png';
import Arrow from '../styles/icons/arrow.png';
import image3 from '../styles/icons/image3.png';

export default function JavaCCDetailsPage() {
  return (
    <div className='JavaCC'>
    <section className="section">
      <div className="container">
        <h2>
          Parser Generator <span className="colored-word">JavaCC</span>
        </h2>

        <div className="section-content">
          <h3>What is JavaCC?</h3>
          <div className="card1">
          <div className="box1">
            <p className="card-body">
              JavaCC (Java Compiler Compiler) is a tool for defining and processing the syntax of programming languages using formal grammar rules. It generates parsers that help analyze structured text based on these rules.
            </p>
            <img src={image3} alt='java-plain' id='icon--javacc'></img>
          </div>
          </div>
        </div>

<br></br>

<div className="section-content">
          <h3>Role of JavaCC</h3>
          <div className="card1">
          <div className="box2">
            <ul className="card-body plain-list">
              <li>JavaCC automatically generates parsers from a high-level grammar definition.</li>
              <li>Used to define custom programming languages or domain-specific languages (DSLs).</li>
              <li>Often used in compiler front-ends for language analysis and transformation.</li>
              <li>JavaCC ensures that input follows the correct grammatical structure.</li>
              <li>Useful for database query languages (SQL-like parsers).</li>
              <li>Helps analyze code for vulnerabilities and security issues.</li>       
            </ul>
          </div>
          </div>
        </div>

        <br></br>

        <div className="section-content">
          <h3>Why JavaCC?</h3>
          <div className="card1">
          <div className="box3">
            <ul className="card-body plain-list">
              <li>JavaCC generates parsers that are written entirely in Java, making them easy to integrate into Java applications.</li>
              <li>JavaCC follows recursive-descent parsing with lookahead (LL(k)), which makes it easier to understand and debug.</li>
              <li>Unlike bottom-up parsers (like YACC/Bison), it works naturally with many programming languages.</li>
              <li>Supports complex token matching (e.g., handling whitespace, comments, keywords).</li>
              <li>Supports custom lookahead (k-token or unlimited lookahead) to handle ambiguous grammars more efficiently.</li>
              <li>JJTree, a preprocessor for JavaCC, generates Abstract Syntax Trees (ASTs) automatically.</li>
            </ul>
            </div>
          </div>
        </div>
        <br></br>

        <div className="section-content">
          <h3>How JavaCC Works?</h3>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
            <div className="card">
              <h4 className="card-header">Define a Grammar (.jj file)</h4>
              <p className="card-body plain-list">
              <li>Specify tokens (lexer rules) and parser rules (syntax rules).</li>
              </p>
              <div className="card-diagram">
                <img id="CodeBlock1" src={CodeBlock1} alt="Grammar example" className="codeblock" />
              </div>
            </div>

            <div className="card">
              <h4 className="card-header">Generate the Parser</h4>
              <p className="card-body plain-list">
              <li>Run JavaCC on the .jj file to generate Java source files.</li>
              </p>
              <div className="card-diagram">
                <img src={CodeBlock2} alt="Generate Parser" className="codeblock" />
              </div>
            </div>

            <div className="card">
            <h4 className="card-header">Parsing Process</h4>
              <p className="card-body plain-list">
                <li>JavaCC’s lexer converts input into tokens.</li>
                <li>The parser (LL(k)) applies grammar rules to validate the input.</li>
              </p>
              <strong className="card-header">Handling Parsing Output</strong><br />
              <p className="card-body plain-list">
                <li>Success: Returns structured data.</li>
                <li>Failure: Throws a ParseException with an error message.</li>
              </p>
            </div>

            <div className="card">
            <h4 className="card-header">Compile & Run the Parser</h4>
              <p className="card-body plain-list">
              <li>Compile generated Java files.</li>
              </p>
              <div className="card-diagram">
                <img src={CodeBlock3} alt="Compile and Run" className="codeblock" />
              </div>
            </div>
          </div>
        </div>

        <div className="arrow-section">
          <img src={Arrow} className="arrows arrow1" alt="Arrow 1" />
          <img src={Arrow} className="arrows arrow2" alt="Arrow 2" />
          <img src={Arrow} className="arrows arrow3" alt="Arrow 3" />
        </div>
      </div>
    </section>
    </div>
  );
}
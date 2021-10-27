import { Element } from "next-styled-system";
import Image from "next/image";
import ShopSkeleton from "public/shop-skeleton.svg";
import { FC } from "react";

const Box = Element("div");

export const Process: FC = () => {
  return (
    <>
      <Box
        as="section"
        d="flex"
        direction="column"
        justify="center"
        minH="60vh"
        p={4}
        py={8}
        textAlign="center"
      >
        <Box as="h1" fz={["23vw", 128]} letterSpacing="-.08em" weight={800}>
          Develop.
        </Box>
        <Box as="h1" fz={["23vw", 128]} letterSpacing="-.08em" weight={800}>
          Preview.
        </Box>
        <Box as="h1" fz={["23vw", 128]} letterSpacing="-.08em" weight={800}>
          Ship.
        </Box>
      </Box>
      <Box
        align="center"
        as="section"
        d="flex"
        flexWrap={[`wrap`, `nowrap`]}
        justify="center"
        pb={8}
      >
        <Box
          _hfa={{
            bgc: `white`,
            border: `1px solid black`,
            color: `black`,
          }}
          as="button"
          bgc="black"
          border="1px solid transparent"
          borderRadius={1}
          color="white"
          fz={3}
          letterSpacing="0.03em"
          m={3}
          px={6}
          py={4}
          transition="all 0.2s ease 0s"
          w={[`100%`, `auto`]}
          weight={500}
          whiteSpace="nowrap"
        >
          Start Deploying
        </Box>
        <Box
          _hfa={{
            border: `1px solid black`,
            color: `black`,
          }}
          as="button"
          border="1px solid #eaeaea"
          borderRadius={1}
          color="#666"
          fz={3}
          letterSpacing="0.03em"
          m={3}
          px={6}
          py={4}
          transition="all 0.2s ease 0s"
          w={[`100%`, `auto`]}
          weight={500}
          whiteSpace="nowrap"
        >
          Get a Demo
        </Box>
      </Box>
      <h2>
        Vercel combines the best developer experience with an obsessive focus on end-user
        performance. Our platform enables frontend teams to do their best work.
      </h2>
      <p>Explore the Tellmann way</p>
      <section className="develop">
        <header className="pre-heading">
          <div>1</div>
          <h3>Develop</h3>
        </header>
        <main>
          <h2>Start with the developer</h2>
          <div className="content-blocks">
            <p className="left">
              Developers love Next.js, the open source React framework Vercel built together with
              Google and Facebook. Next.js powers the biggest websites like Airbnb and Twilio, for
              use cases in e-commerce, travel, news, and marketing.
            </p>
            <p className="right">
              Vercel is the best place to deploy any frontend app. Start by deploying with zero
              configuration to our global edge network. Scale dynamically to millions of pages
              without breaking a sweat.
            </p>
          </div>
          <div className="content-blocks">
            <div className="left">
              <div className="browser-card">
                <header>
                  <div className="browser-dots">
                    <span className="red" />
                    <span className="yellow" />
                    <span className="green" />
                  </div>
                  <div className="tabs">
                    <span>index.js</span>
                  </div>
                </header>
                <main>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                  te
                  <pre>
                    <code>
                      {/* export default function({ data }) {
                  return <Layout>
                  <Product details={data} />
                  </Layout>
                } */}
                    </code>
                  </pre>
                </main>
              </div>
              <div className="browser-card">
                <header>
                  <div className="browser-dots">
                    <span className="red" />
                    <span className="yellow" />
                    <span className="green" />
                  </div>
                  <div className="address-bar">
                    <span>localhost:3000</span>
                  </div>
                </header>
                <main>
                  <ShopSkeleton />
                </main>
              </div>
            </div>
            <div className="right">
              <div>
                <h3>Fast Refresh</h3>
                <p>Reliable live-editing experience for your UI components.</p>
              </div>
              <div>
                <h3>Flexible Data Fetching</h3>
                <p>
                  Connect your pages to any data source, headless CMS, or API and make it work in
                  everyone’s dev environment.
                </p>
              </div>
              <div>
                <h3>Edge on Localhost</h3>
                <p>
                  From caching to Serverless Functions, all our cloud primitives work perfectly on
                  localhost.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <p>WORKS WITH 30+ JAMSTACK FRAMEWORKS</p>
          <div className="logo-banner">
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
            <div className="logo"><span className="tooltip">next.js</span></div>
          </div>
        </footer>
      </section>
      <section className="preview">
        <header className="pre-heading">
          <div>2</div>
          <h3>Preview</h3>
        </header>
        <main>
          <h2>Accelerate with your team</h2>
          <div className="content-blocks">
            <p className="wide">
              Frontend development is not meant to be a solo activity. The Vercel platform makes it
              a collaborative experience with deploy previews for every code change, by seamlessly
              integrating with GitHub, GitLab, and Bitbucket.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="line" />
              <div className="text">
                <h3>Push to deploy</h3>
                <p>
                  Import your repo with one click, then push. Our built-in CI/CD system triggers for
                  every code change.
                </p>
              </div>
              <figure>
                <div className="browser-card">
                  <header>
                    <div className="browser-dots">
                      <span className="red" />
                      <span className="yellow" />
                      <span className="green" />
                    </div>
                    <div className="title">
                      <span>Bash</span>
                    </div>
                  </header>
                  <main>
                    <pre>
                      <code>
                        ▲ ~ e-commerce-site/ git push <span className="cursor-block" />
                      </code>
                    </pre>
                  </main>
                </div>
              </figure>
            </div>

            <div className="timeline-item">
              <span className="line" />
              <div className="text">
                <h3>Get your Preview URL</h3>
                <p>
                  Every Git branch and PR receives a live, production-like URL that everyone on your
                  team can visit.
                </p>
              </div>
              <figure>
                <div className="card">
                  <header>
                    <div className="title">
                      <strong>Vercel</strong>
                      <span className="tag">bot</span>
                      <span className="faded">commented 1 hour ago</span>
                    </div>
                  </header>
                  <main>
                    <p className="condensed">
                      This pull request is being automatically deployed with Vercel. To see the
                      status of your deployment, click below:
                    </p>
                    <ul>
                      <li>
                        <div>
                          <span aria-label="Search" role="img">
                            🔍
                          </span>{" "}
                          <b>Inspect:</b>
                          <span className="preview-comment_comment-link__3FmRB">
                            https://vercel.com/acme/shop/krgj1n5
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span aria-label="Check Mark" role="img">
                            ✅
                          </span>{" "}
                          <b>Preview:</b>
                          <span className="preview-comment_comment-link__3FmRB">
                            https://shop-git-new-checkout.vercel.app
                          </span>
                        </div>
                      </li>
                    </ul>
                  </main>
                </div>
              </figure>
            </div>

            <div className="timeline-item">
              <span className="line" />
              <div className="text">
                <h3>Share and Collaborate</h3>
                <p>
                  Avoid surprises by iterating with your entire team. Test from the perspective of
                  your users, on every platform.
                </p>
              </div>
              <figure>
                <div className="chart-conversation">
                  <div className="chat-item">
                    <div className="conversation-bubble">
                      Here’s my deploy preview for the page update:
                      https://shop-git-new-checkout.vercel.app
                    </div>
                    <div className="author-title">Sarah (Engineering Team)</div>
                    <div className="avatar">
                      <Image
                        alt="Avatar"
                        height={46}
                        src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_92/front/home/new/sarah-2.png"
                        width={46}
                      />
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="conversation-bubble">
                      I love it. Can you double check we’re using the correct brand color scheme?
                    </div>
                    <div className="author-title">John (Design Team)</div>
                    <div className="avatar">
                      <Image
                        alt="Avatar"
                        height={46}
                        src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_92/front/home/new/sarah-2.png"
                        width={46}
                      />
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="conversation-bubble">Everything looks good to me, ship it!</div>
                    <div className="author-title">Leo (Marketing Team)</div>
                    <div className="avatar">
                      <Image
                        alt="Avatar"
                        height={46}
                        src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_92/front/home/new/sarah-2.png"
                        width={46}
                      />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </main>
      </section>

      <section className="ship">
        <header className="pre-heading">
          <div>3</div>
          <h3>Ship</h3>
        </header>
        <main>
          <h2>Delight every visitor</h2>
          <div className="content-blocks">
            <p className="left">
              Merged changes instantly go live on our global edge network, putting your content as
              close as possible to your customers. Everything is taken care of for you, from SSL
              encryption to asset compression and cache invalidation.
            </p>
            <p className="right">
              Speed is critical to customers - and for SEO. Vercel goes beyond just caching static
              content, scaling to millions of pages through dynamic code execution.
            </p>
          </div>
        </main>
      </section>
      <section className="globe">
        <div className="globe-canvas">https://react-globe.netlify.app/</div>
        <div className="stats">
          <ul>
            <li>
              <div className="fact">70</div>
              <div className="name">Cities</div>
            </li>
            <li>
              <div className="fact">4.5B</div>
              <div className="name">REQUESTS PER WEEK</div>
            </li>
            <li>
              <div className="fact">9PB</div>
              <div className="name">DATA SERVED</div>
            </li>
            <li>
              <div className="fact">99.99%</div>
              <div className="name">GUARANTEED UPTIME</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Process;

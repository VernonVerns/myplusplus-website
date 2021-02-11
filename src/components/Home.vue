<template>
    <div id="my_home">
        <div class="paths">
            <div class="path one"></div>
            <div class="path two"></div>
        </div>
        <div class="content">
            <nav>
                <button class="menu-btn">
                    <img src="../assets/img/bars.svg" alt="menu button" />
                </button>
                <ul class="list-unstyled my-nav">
                    <li>
                        <img src="../assets/img/logo1.png" alt="company logo" />
                    </li>
                </ul>
            </nav>
            <section class="main-sec">
                <div class="row">
                    <div class="col-sm-7">
                        <h1>
                            Intelligent <br />
                            <span>Automation</span> for Any<br />
                            Workplace
                        </h1>
                        <p>
                            mY++ Inc. is a technology innovations company
                            headquartered in Mthatha. mY++’s primary objective
                            is to enhance customers' experience and maximize
                            their productivity by improving existing tools and
                            inventing new technologies.<span id="dots">..</span>
                            <span id="more">
                                Currently, we have the main focus on Software
                                development to improve Educational and Health
                                deliverables and operations. We are providing
                                solutions for all kinds of businesses, from
                                small to enterprise organizations, individual as
                                well as the general public. <br />
                                <br />

                                <p>
                                    Embracing the 4th industrial revolution, we
                                    are striving to form a significant part in
                                    this revolution while also bridging the gap,
                                    pulling the societies that are behind with
                                    technology, ensuring they are up with the
                                    technology growth and usage as to benefit
                                    from the advantages that it brings.
                                </p>
                            </span>
                            &nbsp;
                            <button
                                type="button"
                                @click="readMore()"
                                id="read_more"
                            >
                                read more
                            </button>
                        </p>

                        <h4 class="last-line">
                            We love technology, connect us.
                        </h4>
                        <ul class="list-unstyled social-icons">
                            <li>
                                <a href=""><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa fa-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <a
                    href="https://api.whatsapp.com/send?phone=27780687445"
                    target="_blank"
                    class="chat-btn my-btn w3-card"
                    >Chat Now</a
                >
            </section>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        readMore() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("read_more");

            if (dots.style.display === "none") {
                btnText.innerHTML = "read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        },
    },
};
</script>

<script lang="ts" setup>
</script>

<template>
    <div class="flex justify-center">
        <div class="container text-center pt-3 px-4">
            <h1 class="font-bold text-4xl py-1">Introducing Payroll Processor</h1>
            <section class="py-3">
                <p class="text-left">
                    <a href="https://github.com/KyleMcMaster/payroll-processor/" class="text-accent">Payroll
                        Processor </a>is a open source project I started in May of 2019. The general idea of the domain
                    is from the perspective of a payroll coordinator who manages employees of a company and their
                    payroll information. It has been a rewarding experience creating the application and working with my
                    fellow contributors. It's long overdue but I felt the project deserved a blog post reviewing it's
                    history and celebrating some of the modest successes it has achieved.
                </p>
            </section>

            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl">Humble Beginnings</h2>
                </div>
                <p class="text-left">In May of 2019, I was traveling home from ngConf riding the wave of excitement and
                    eagerly looking to expand on some of the topics I had listened to during my attendence. Being a
                    primarily .NET focused developer at the time, I was looking for a way to grow my front end skills
                    and gain experience with Angular. As with most side projects, I quickly scaffolded out a few small
                    features before hitting a few roadblocks while hacking together HTTP requests, debugging RxJS, and
                    piecing together CSS until things "worked". As development slowed, the project sat for the better
                    part of a year until a renewed interest in the project came in early February 2020. A few weeks
                    later, Covid restrictions allowed many to begin working remotely. This freed up time for me that
                    would have been spent commuting and allowed me to pursue the project more consistently. Around this
                    same time, a good friend and mentor of mine <a href="https://www.seangwright.me/"
                        class="text-accent">Sean Wright</a>
                    became
                    interested in the project and wanted to implement the backend using functional programming patterns
                    with event sourcing and CQRS. Having multiple contributors accelerated development and allowed us
                    both to pursue technologies we had been interested in while formalizing a clear roadmap for the
                    project's initial implementation.
                </p>
            </section>

            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Project Structure and Technologies</h2>
                </div>
                <p class="text-left">
                    The first iteration of the project consisted of 3 primary components: a .NET Core Web API, an Azure
                    Functions project, and an Angular application. The project was configured to use VS Code's
                    Multi-root Workspaces which enabled a cohesive development experience inside VS Code. The .NET Core
                    Web API is built using practices from Clean Architecture and Vertical Slice Architecture with
                    technologies like Steve "Ardalis" Smith's <a href="https://github.com/ardalis/ApiEndpoints"
                        class="text-accent">ApiEndpoints</a> and <a href="https://github.com/ardalis/GuardClauses"
                        class="text-accent">GuardClauses</a> as well as LanguageExt, and CosmosDB. The Azure Functions
                    allowed us to explore asynchronous message handling with Azure Queue
                    Storage and SignalR. Developing the Angular application allowed me to grow my knowledge of Angular
                    best practices and gain familiarity with RxJS and Akita State Management.
                </p>
                <p>
                    This initial phase of building the application exposed me to a smorgasboard of modern web
                    technologies. It really gave the project momentum as it was exciting solving problems in this domain
                    utilizing new frameworks and patterns. With time, the project grew to include implementations of
                    CI/CD using GitHub actions, utilizing Bogus for data generation, and Azure Bicep for infrastructure
                    as code.
                </p>
            </section>
            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Contributors</h2>
                </div>
                <p class="text-left">
                    I have to give a shout out to my fellow contributors and friends for their insights and
                    inspirations. First, Sean G. Wright was absolutely instrumental to the project's success. Payroll
                    Processor simply wouldn't be where it is today without his contributions. Having him to bounce ideas
                    off of made the project rewarding and held me accountable for contributing on days when I would lose
                    interest. I'd like to thank <a href="https://conklin.dev/" class="text-accent">Justin Conklin</a>
                    for assisting me with
                    his HTML
                    and CSS talents. Finally, I'd like to thank <a href="https://github.com/JonathanKeppler"
                        class="text-accent">Jonathan Keppler</a>,
                    <a href="http://www.davidedmiston.com/" class="text-accent">David Edmiston</a> and <a
                        href="https://github.com/featuresnap" class="text-accent">Pat Kelly</a> for their feedback and
                    allowing me to pick their brain on different approaches and patterns.
                </p>
            </section>

            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Roadmap</h2>
                </div>
                <p class="text-left">
                    As I look forward, there are many technologies I am excited about trying out inside this
                    application's ecosystem. For local development, implementing Project Tye orchestrations would be
                    useful for quickly running the applications. I'd like to pursue adding administration features to
                    the domain implemented in a separate SPA using Vue3 and TailwindCSS. The existing Angular app's
                    theme could use an overhaul along with an opportunity to review accessibility practices in semantic
                    HTML. Expanding the Continuous Deployment process to use the existing Azure Bicep scripts as a
                    foundation would be a great way to setup for automated integration testing and eventually get a live
                    version of the site up and running. I've been slowly piecing together a formal roadmap for the
                    future of the project and would love to get feedback on what I can do to make it a better reference
                    application for those that are interested.
                </p>
            </section>

            <section class="py-3 pb-5">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Closing Remarks</h2>
                </div>
                <p class="text-left">Payroll Processor has grown to have 73 stars on GitHub which is larger than I had
                    ever anticipated. I'm proud of the project and I'm excited to see what the future holds for it. It's
                    great to have a sandbox application to test new technologies or patterns. I encourage others who are
                    looking to grow their skills to pursue building side projects like this on their own or with a
                    friend. Please feel free to reach out on Twitter if you are interested in contributing and checkout
                    the issues page for open issues and feature requests.</p>
            </section>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 60%;
    height: 60%;
}
</style>
<script lang="ts" setup>
</script>

<template>
    <div class="flex justify-center">
        <div class="container text-center pt-3 px-4">
            <h1 class="font-bold text-4xl py-1">2021 Year in Review</h1>
            <h3 class="font-bold text-3xl py-1">Reflection on my experiences in the year 2021</h3>

            <section class="py-3">
                <p class="text-left">
                    In the spirit of the new year and looking ahead at future goals, I've decided to do a year in review post highlighting my last 12 months of work and personal life. I recently read this
                    <a
                        href="https://ardalis.com/year-in-review-post-checklist/"
                        class="text-accent"
                    >Year in Review Checklist</a> which further motivated me to commit to writing more for my blog and gave me a few ideas on how to structure my writing.
                </p>
            </section>

            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl">Personal Milestones</h2>
                </div>
                <p
                    class="text-left"
                >Last year was a big one for me in my personal life! I got married over the summer and bought a house in the fall. Looking back the timing of our wedding was perfect as Covid numbers had dipped and allowed us to have a small but fun outdoor ceremony. With the purchase of a home, I'm excited to have some side projects to accomplish that are non-technical and to work away from the keyboard for a bit. We'll see if that excited holds through remodeling our kitchen!</p>
            </section>

            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Books I Read</h2>
                </div>
                <p class="text-left">
                    During the summer, I try to focus on getting outdoors as much as possible. Reading books are a great way to do this while still progressing my technical skills, so I picked up a few to keep me busy. In my workplace, I knew I had a few processes that could benefit from
                    <code
                        class="italic"
                    >Refactoring: Improving the Design of Existing Code</code> by Martin Fowler (
                    <a
                        href="https://martinfowler.com/books/refactoring.html"
                        class="text-accent"
                    >link</a>) so I was eager to read that one and apply the strategies as I read the book. As a newer lead developer familiar with SOLID principles, I was also intrigued to read
                    <code
                        class="italic"
                    >Clean Architecture: A Craftsman's Guide to Software Structure and Design</code> by Robert C. Martin (
                    <a
                        href="https://www.informit.com/store/clean-architecture-a-craftsmans-guide-to-software-structure-9780134494166"
                        class="text-accent"
                    >link</a>) and
                    <code
                        class="italic"
                    >Design Patterns: Elements of Reusable Object-Oriented Software</code> by GoF (
                    <a
                        href="https://www.informit.com/store/design-patterns-elements-of-reusable-object-oriented-9780201633610"
                        class="text-accent"
                    >link</a>) as I wanted to make sure I was making more informed choices about the design of my systems and improve my ability to recognize and apply design patterns. Although I didn't finish every page of these books, I really enjoyed reading them and will continue to reference them in the future.
                </p>
            </section>
            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Github Contributions</h2>
                </div>
                <p class="text-left">
                    Last year my overall number of contributions for 2021 were lower than 2020, I'm still proud of the activity I accomplished last year. I actively maintained my primary side project and reference application
                    <a
                        href="https://github.com/KyleMcMaster/payroll-processor"
                        class="text-accent"
                    >payroll-processor</a> and saw consistent growth on the number of stars on that project. I can't believe it has over 50 now! Some of my favorite highlights for that project were upgrading it to Angular 13, .NET 6, and Azure Functions v4.
                </p>

                <div class="flex justify-center py-3">
                    <img
                        src="/public/2021_gh_wrap_og_image.png"
                        alt="KyleMcMaster's 2021 GitHubWrap"
                    />
                </div>

                <p class="text-left">
                    I also made some small contributions to a few OSS projects this year that were rewarding. Although my singular contribution to this project was small, I have really enjoyed following along Sean G. Wright's
                    <a
                        href="https://github.com/seangwright/typescript-functional-extensions"
                        class="text-accent"
                    >TypeScript implementation</a> of CSharpFunctionalExtensions. This year in particular I also published a lot of my kata exercises which was rewarding to compare implementations between attempts. My favorite kata of 2021 was definitely the
                    <a
                        href="https://github.com/ardalis/kata-catalog/blob/main/katas/Tennis%20Scoring.md"
                        class="text-accent"
                    >Tennis Kata</a> and I really enjoyed attempting this kata in F# after reading Mark Seeman's series of blog
                    <a
                        href="https://blog.ploeh.dk/2021/03/29/table-driven-tennis-scoring/"
                        class="text-accent"
                    >posts</a> that demonstrate a variety of ways to solve the exercise.
                </p>
            </section>

            <section class="py-3">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Professional Accomplishments</h2>
                </div>
                <p class="text-left">
                    2021 was a busy year for me professionally. I attended virtual meetups, participated in frequent katas, and lead more training exercises than previous years. My role shifted in 2021 as I adjusted to being a team lead and this allowed me to spend more time navigating the Azure portal focusing on application stability and monitoring. Thinking back on the year at a technical level, I learned a lot about CI/CD and was introduced to Azure ARM templates. A project at the beginning of the year also gave me the opportunity to implement event sourcing using Azure Service Bus queues and topics alongside Azure Function Service Bus triggers which was an awesome experience and is something I hope to develop again in the future. Towards the end of the year, I had accepted an offer for a position at
                    <a
                        href="https://nimblepros.com/"
                        class="text-accent"
                    >NimblePros</a> so I spent my remaining time at Park Place Technologies focused on documentation, diagramming, and training which was rewarding to refine those skills. I've recently become a big fan of the draw.io extension in Visual Studio Code!
                </p>
            </section>

            <section class="py-3 pb-5">
                <div class="flex justify-start">
                    <h2 class="font-bold text-2xl flex justify-start">Looking forward to 2022</h2>
                </div>
                <p
                    class="text-left"
                >This year I'm really focused on improving my technical writing skills, both by writing blogs and producing more documentation for projects I work on. I would also like to continue to grow my front end development skills as I still feel I have room to improve in CSS and HTML as well as improving my knowledge of modern javascript frameworks like Vue and Angular. At the end of the day, learning new things helps me stay motivated and engaged. Regardless of what the future may bring I know I'll continue trying new things and hopefully having some fun along the way! I know I'm a few days late to post this but welcome to 2022! Hope everyone is off to a great start for the new year!</p>
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
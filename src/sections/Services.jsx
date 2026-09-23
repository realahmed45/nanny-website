/**
 * What the agency actually does.
 *
 * Six services, in the order the design lays them out. This replaced the
 * three "how it works" steps: the flow of a booking matters less to somebody
 * still deciding whether to book at all than knowing what they can ask for.
 *
 * The icons are drawn inline rather than loaded as files. They are small,
 * they inherit the text colour, and they stay sharp at any size — none of
 * which is true of six more image requests.
 */

const SERVICES = [
  {
    title: 'Childcare & Babysitting',
    body: 'Caring and attentive supervision for children of all ages. Playtime, routines, activities, and safe daily care.',
    icon: (
      <>
        <circle cx="18" cy="14" r="5" />
        <path d="M10 40V29a8 8 0 0 1 16 0v11" />
        <circle cx="32" cy="19" r="3.5" />
        <path d="M26 40v-8a6 6 0 0 1 12 0v8" />
        <path d="M10 40h28" />
      </>
    ),
  },
  {
    title: 'Cooking + Meal Preparation',
    body: "Personalized meals, snacks, and kitchen assistance tailored to your family's full luxury experience. Kitchen assistance handled with care and attention.",
    icon: (
      <>
        <path d="M8 28h32a0 0 0 0 1 0 0 12 12 0 0 1-12 12H20A12 12 0 0 1 8 28Z" />
        <path d="M18 22c0-3 3-3 3-6s-3-3-3-6" />
        <path d="M26 22c0-3 3-3 3-6s-3-3-3-6" />
        <path d="M6 40h36" />
      </>
    ),
  },
  {
    title: 'Tutoring',
    body: 'Support with homework, reading, and age-appropriate learning. Fun educational activities that keep children engaged.',
    icon: (
      <>
        <path d="M10 10h18a5 5 0 0 1 5 5v23a4 4 0 0 0-4-4H10Z" />
        <path d="M38 10h-5a5 5 0 0 0-5 5v23a4 4 0 0 1 4-4h6Z" />
        <path d="M16 18h10M16 24h10" />
      </>
    ),
  },
  {
    title: 'Travel Nanny Service',
    body: 'A trusted nanny who travels with your family, providing caring support and helping make every journey comfortable, smooth, and stress-free.',
    icon: (
      <>
        <path d="M6 30h4l4-9h20l4 9h4v6h-4" />
        <path d="M14 36H10" />
        <circle cx="16" cy="36" r="3" />
        <circle cx="34" cy="36" r="3" />
        <path d="M22 36h8" />
        <path d="M14 14c2-2 5-2 7 0M27 12c2-2 5-2 7 0" />
      </>
    ),
  },
  {
    title: 'Personal Butler',
    body: 'You can ask for a butler experience, they will get you the full assistance and provide you luxury comfort and experience',
    icon: (
      <>
        <circle cx="24" cy="12" r="4" />
        <path d="M24 18v14" />
        <path d="M16 22l8-3 8 3" />
        <path d="M24 32l-5 10M24 32l5 10" />
        <path d="M34 18h8v6h-8z" />
      </>
    ),
  },
  {
    title: 'Wedding',
    body: 'Dedicated childcare and support during weddings, keeping little ones happy, comfortable, and cared for while you enjoy the celebration.',
    icon: (
      <>
        <circle cx="17" cy="15" r="4.5" />
        <path d="M9 40V30a8 8 0 0 1 16 0v10" />
        <circle cx="33" cy="17" r="4" />
        <path d="M26 40v-8a7 7 0 0 1 14 0v8" />
        <path d="M22 9c1.5-2 4.5-2 5 1 .5-3 3.5-3 5-1 1.5 2-2.5 5-5 7-2.5-2-6.5-5-5-7Z" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-[110px]">
      <header className="mx-auto mb-8 max-w-[860px] px-5 text-center lg:mb-[54px]">
        <p className="eyebrow mb-2.5">What We Provide</p>
        <h2 className="section-title mb-4">Childcare Made Simple For Families In Bali</h2>
        <p className="text-[15px] text-ink-soft lg:text-lg">
          Nanny In Paradise connects families with childcare support for
          holidays, short stays, regular care and special occasions. Our goal is
          to make finding help feel easy, clear and personal. Talk to us and we
          fulfil your life style.
        </p>
      </header>

      <div className="wrap">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map(({ title, body, icon }) => (
            <article key={title} className="rounded-[14px] bg-cream-card p-7 lg:p-10">
              <span className="mb-6 grid h-[72px] w-[72px] place-items-center rounded-full bg-[#FDF3D0] text-ink">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </span>
              <h3 className="mb-3.5 text-xl font-medium leading-[1.12] tracking-[-0.02em] lg:text-[25px]">
                {title}
              </h3>
              <p className="text-[15px] text-ink-soft lg:text-[17px]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

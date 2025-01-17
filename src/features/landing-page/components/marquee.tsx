import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "ArkXpense has completely transformed how we handle group expenses. The automation is a lifesaver!",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "The transparency in transactions is unmatched. No more confusion or disputes in our travel groups!",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Clara",
    username: "@clara",
    body: "Love how simple and intuitive the interface is. Settling debts has never been easier.",
    img: "https://avatar.vercel.sh/clara",
  },
  {
    name: "David",
    username: "@david",
    body: "Integrating DeFi strategies is genius! My funds aren't just sitting idle anymore.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "The Telegram bot integration is super convenient. Managing expenses directly from chat is amazing.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "The grant transparency feature is a game-changer for our community initiatives. Highly recommend it!",
    img: "https://avatar.vercel.sh/frank",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.05] hover:bg-gray-50/[.10]",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-300">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-400">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div id="testimoninals" className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden text-white rounded-lg">
        <h2 className="text-4xl font-semibold text-gray-300 mb-8">What People Are Saying</h2>
      {/* Marquee Row 1 */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Marquee Row 2 */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

    </div>
  );
}

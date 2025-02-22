import { ReactComponent as ArrowRight } from '@sd/assets/svgs/arrow-right.svg';
import { Helmet } from 'react-helmet';
import Markdown from '../components/Markdown';
import { TeamMember, TeamMemberProps } from '../components/TeamMember';
import { resolveFilesGlob } from '../utils';

const teamImages = resolveFilesGlob(import.meta.globEager('../assets/images/team/*'));
const investorImages = resolveFilesGlob(import.meta.globEager('../assets/images/investors/*'));

const teamMembers: Array<TeamMemberProps> = [
	{
		name: 'Jamie Pine',
		role: 'Founder, Engineer & Designer',
		image: teamImages['jamie.jpg']!,
		socials: {
			twitter: 'https://twitter.com/jamiepine',
			twitch: 'https://twitch.tv/jamiepinelive',
			github: 'https://github.com/jamiepine'
		}
	},
	{
		name: 'Brendan Allan',
		role: 'Rust Engineer',
		image: teamImages['brendan.jpg']!,
		socials: {
			twitter: 'https://twitter.com/brendonovichdev',
			twitch: 'https://twitch.tv/brendonovich',
			github: 'https://github.com/brendonovich'
		}
	},
	{
		name: 'Oscar Beaumont',
		role: 'Rust Engineer',
		image: teamImages['oscar.jpg']!,
		socials: {
			twitter: 'https://twitter.com/oscartbeaumont',
			twitch: 'https://twitch.tv/oscartbeaumont',
			github: 'https://github.com/oscartbeaumont'
		}
	},
	{
		name: 'Ericson Soares',
		role: 'Rust Engineer',
		image: teamImages['ericson.jpg']!,
		socials: {
			twitter: 'https://twitter.com/fogodev',
			github: 'https://github.com/fogodev'
		}
	},
	{
		name: 'Utku Bakır',
		role: 'React Native Engineer',
		image: teamImages['utku.jpg']!,
		socials: {
			github: 'https://github.com/utkubakir'
		}
	},
	{
		name: 'Jake Robinson',
		role: 'Rust Engineer',
		image: teamImages['jake.jpg']!,
		socials: {
			github: 'https://github.com/brxken128'
		}
	},
	{
		name: 'Mihail Dounaev',
		role: 'Graphic Designer',
		image: teamImages['mihail.jpg']!,
		socials: {
			twitter: 'https://twitter.com/mmmintdesign',
			dribbble: 'https://dribbble.com/mmmint'
		}
	}
];

const investors: Array<TeamMemberProps> = [
	{
		name: 'Joseph Jacks',
		role: 'Founder, OSSC',
		investmentRound: 'Lead Seed',
		image: investorImages['josephjacks.jpg']!
	},
	{
		name: 'Guillermo Rauch',
		role: 'CEO, Vercel',
		investmentRound: 'Co-Lead Seed',
		image: investorImages['guillermo.jpg']!
	},
	{
		name: 'Naval Ravikant',
		role: 'Founder, AngelList',
		investmentRound: 'Co-Lead Seed',
		image: investorImages['naval.jpg']!
	},
	{
		name: 'Neha Narkhede',
		role: 'Confluent, Apache Kafka',
		investmentRound: 'Seed',
		image: investorImages['neha.jpg']!
	},
	{
		name: 'Austen Allred',
		role: 'CEO, Bloom Institute of Technology',
		investmentRound: 'Seed',
		image: investorImages['austen.jpg']!
	},
	{
		name: 'Tom Preston-Werner',
		role: 'Founder, GitHub',
		investmentRound: 'Seed',
		image: investorImages['TOM.jpg']!
	},
	{
		name: 'Tobias Lütke',
		role: 'CEO, Shopify',
		investmentRound: 'Seed',
		image: investorImages['tobiaslutke.jpg']!
	},
	{
		name: 'Justin Hoffman',
		role: 'Former VP Sales, Elasticsearch',
		investmentRound: 'Seed',
		image: investorImages['justinhoffman.jpg']!
	},
	{
		name: 'Ry Walker',
		role: 'Founder, Astronomer',
		investmentRound: 'Seed',
		image: investorImages['rywalker.jpg']!
	},
	{
		name: 'Zachary Smith',
		role: 'Head of Edge Infrastructure, Equinix',
		investmentRound: 'Seed',
		image: investorImages['zacharysmith.jpg']!
	},
	{
		name: 'Sanjay Poonen',
		role: 'Former COO, VMware',
		investmentRound: 'Seed',
		image: investorImages['sanjay.jpg']!
	},
	{
		name: 'David Mytton',
		role: 'CEO, console.dev',
		investmentRound: 'Seed',
		image: investorImages['davidmytton.jpg']!
	},
	{
		name: 'Peer Richelsen',
		role: 'CEO, Cal.com',
		investmentRound: 'Seed',
		image: investorImages['peer.jpg']!
	},
	{
		name: 'Lester Lee',
		role: 'Founder, Slapdash',
		investmentRound: 'Seed',
		image: investorImages['lesterlee.jpg']!
	},
	{
		name: 'Haoyuan Li',
		role: 'Founder, Alluxio',
		investmentRound: 'Seed',
		image: investorImages['haoyuan.jpg']!
	},
	{
		name: 'Augusto Marietti',
		role: 'CEO, Kong',
		investmentRound: 'Seed',
		image: investorImages['augusto.jpg']!
	},
	{
		name: 'Vijay Sharma',
		role: 'CEO, Belong',
		investmentRound: 'Seed',
		image: investorImages['vijay.jpg']!
	},
	{
		name: 'Naveen R',
		role: 'Founder, NocoDB',
		investmentRound: 'Seed',
		image: investorImages['naveen.jpg']!
	}
];

function Page() {
	return (
		<Markdown articleClassNames="mx-auto mt-32 prose-a:text-white">
			<Helmet>
				<title>Our Team - Spacedrive</title>
				<meta name="description" content="Who's behind Spacedrive?" />
			</Helmet>
			<div className="team-page relative mx-auto">
				<div
					className="bloom subtle egg-bloom-one -top-60 right-[-400px]"
					style={{ transform: 'scale(2)' }}
				/>
				<div className="relative z-10">
					<h1 className="fade-in-heading text-5xl leading-tight sm:leading-snug ">
						We believe file management should be <span className="title-gradient">universal</span>.
					</h1>
					<p className="animation-delay-2 fade-in-heading text-white/50 ">
						Your priceless personal data shouldn't be stuck in a device ecosystem. It should be OS
						agnostic, permanent and owned by you.
					</p>
					<p className="animation-delay-2 fade-in-heading text-white/50 ">
						The data we create daily is our legacy—that will long outlive us. Open source technology
						is the only way to ensure we retain absolute control over the files that define our
						lives, at unlimited scale.
					</p>
					<a
						href="/docs/product/resources/faq"
						className="animation-delay-3 fade-in-heading text-underline flex flex-row items-center text-gray-400 underline-offset-4 duration-150 hover:text-white"
					>
						<ArrowRight className="mr-2" />
						Read more
					</a>
					<div className="fade-in-heading animation-delay-5">
						<h2 className="mt-10 text-2xl leading-relaxed sm:mt-20 ">Meet the team</h2>
						<div className="xs:grid-cols-3 my-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4">
							{teamMembers.map((member) => (
								<TeamMember key={member.name} {...member} />
							))}
						</div>
						<p className="text-sm text-gray-400">
							... and all the awesome{' '}
							<a
								href="https://github.com/spacedriveapp/spacedrive/graphs/contributors"
								target="_blank"
								rel="noreferrer"
								className="oss-credit-gradient duration-200 hover:opacity-75"
							>
								open source contributors
							</a>{' '}
							on GitHub.
						</p>
						<h2 id="investors" className="mt-10 mb-2 text-2xl leading-relaxed sm:mt-20 ">
							Our investors
						</h2>
						<p className="text-sm text-gray-400 ">
							We're backed by some of the greatest leaders in the technology industry.
						</p>
						<div className="my-10 grid grid-cols-3 gap-x-5 gap-y-10 sm:grid-cols-5">
							{investors.map((investor) => (
								<TeamMember key={investor.name + investor.investmentRound} {...investor} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Markdown>
	);
}

export { Page };

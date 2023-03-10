import Header from '@a/components/header'
import Hr from '@a/components/hr'
import DndWrapper from '@a/components/dnd/dndWrapper'

export default function Index() {
	return (
		<>
			<div className="max-w-[1920px] mx-auto px-[2rem] mb-[10rem]">
				<Header />
				<Hr />

				<article className="flex justify-center gap-[3rem]">
					<DndWrapper />
				</article>
			</div>
		</>
	)
}

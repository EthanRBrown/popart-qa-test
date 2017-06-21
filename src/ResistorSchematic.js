import React from 'react'
import { connect } from 'react-redux'
import ColHeader from './ColHeader'

const lineStyle = { stroke: 'black', strokeWidth: 0.2, fill: 'none' }
const rLabelStyle = { fontSize: '6px' }

// currently only works for drawing vertically-oriented resistors
const Resistor = props => {
	const cx = props.x0
	const y0 = props.y0
	const w = 12
	const h = 4
	const r1 = [
			[cx, y0],
			[cx, y0 + h*3.5],
			[cx + w/2, y0 + h*4],
			[cx - w/2, y0 + h*5],
			[cx + w/2, y0 + h*6],
			[cx - w/2, y0 + h*7],
			[cx + w/2, y0 + h*8],
			[cx - w/2, y0 + h*9],
			[cx + w/2, y0 + h*10],
			[cx - w/2, y0 + h*11],
			[cx, y0 + h*11.5],
			[cx, y0 + h*15.5],
		].map(p => p.join(',')).join(' ')
	return <g>
			<text x={cx + w*0.7} y={y0 + h*4} style={rLabelStyle}>{props.label}</text>
			<text x={cx + w*0.7} y={y0 + h*4 + 7.5} style={rLabelStyle}>{props.value}</text>
			<polyline points={r1} style={lineStyle} />
		</g>
}

const ResistorSchematic = props => {
	// TODO: hardcoding geometry below is bad!
	return <div>
			<ColHeader title="Schematic" />
			<svg style={{ width: '100%' }} viewBox='0 0 100 100'>
				<line x1={45} y1={10} x2={45} y2={20} style={lineStyle} />
				<line x1={20} y1={20} x2={70} y2={20} style={lineStyle} />
				<Resistor x0={20} y0={20} label="R1" value={`${props.resistors.byId["1"]} Ω`} />
				<Resistor x0={70} y0={20} label="R2" value={`${props.resistors.byId["2"]} Ω`} />
				<line x1={20} y1={82} x2={70} y2={82} style={lineStyle} />
				<line x1={45} y1={82} x2={45} y2={92} style={lineStyle} />
			</svg>
		</div>
}

export default connect(s => s)(ResistorSchematic)

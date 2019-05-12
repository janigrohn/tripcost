import React from 'react';
import styled from "styled-components";
import { useMorphKeys } from 'react-morph';

const Wrapper = styled.div`
	height: 120px;
	margin: 0.5rem 0;
	border-radius: 0.25rem;
	background: linear-gradient(to bottom, #ADD100, #7B920A);
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0px 0px 15px 0px rgba(0,0,0,0.1);
`;

const TitleButton = styled.button`
	display: flex;
	height: 120px;
	width: 100%;
	padding: 1rem;
	margin: 0;
	border: none;
	background: transparent;
	text-align: left;
	outline: none !important;
`;

const Title = styled.h2`
	display: flex;
	align-items: center;
	margin: 0;
	font-size: 1.8rem;

	.title-icon {
		height: 2.75rem;
		width: 3.5rem;
		margin-right: 0.8125rem;;
	}
`;

const RouteSelector = ({ toggleExpanded }) => {
	const morphs = useMorphKeys([
		'wrapper',
		'title'
	], {
		getMargins: true,
	});

	return (
		<Wrapper {...morphs.wrapper}>
			<TitleButton onClick={toggleExpanded}>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.002 4.999l.501 2.001 1.496-4-3.998 1.5 2.001.499zm.416-4.999c-2.53 0-4.582 2.014-4.582 4.499 0 2.524 2.004 4.248 4.582 6.501 2.578-2.253 4.582-3.978 4.582-6.501 0-2.485-2.052-4.499-4.582-4.499zm0 7.791c-1.771 0-3.207-1.436-3.207-3.207 0-1.772 1.436-3.209 3.207-3.209s3.207 1.437 3.207 3.209c0 1.771-1.436 3.207-3.207 3.207zm-.356 6.213c0-.535.434-.968.968-.968.535 0 .969.433.969.968 0 .535-.434.968-.969.968-.534 0-.968-.433-.968-.968zm4.938-4.629v10.625l-6.455 4-5.545-4-5.545 4-6.455-4v-18l6.455 4 5.545-4 1 .777v7.223h-2v-4.813l-4 2.886v3.927h-1v-3.929l-4-2.479v13.294l4 2.479v-4.365h1v4.141l4-2.885v-3.256h2v3.255l4 2.885v-4.14h1v4.365l4-2.479v-7.5c.725-.654 1.409-1.315 2-2.011zm-8.76 5.252l-1.659-.945.583-1.024 1.66.945-.584 1.024zm2.252.805c-.433 0-.855-.087-1.253-.259l.467-1.082c.25.107.514.162.786.162.222 0 .441-.037.651-.11l.388 1.112c-.334.118-.683.177-1.039.177zm-10.922-1.2c.26 0 .514-.05.754-.148l.447 1.09c-.382.157-.786.236-1.201.236-.373 0-.741-.066-1.093-.195l.407-1.105c.221.081.452.122.686.122zm5.369-2.364c.42 0 .83.082 1.217.244l-.453 1.087c-.243-.101-.5-.153-.764-.153-.23 0-.457.04-.674.119l-.401-1.108c.346-.126.708-.189 1.075-.189zm-7.97 1.168c.535 0 .969.433.969.968 0 .535-.434.968-.969.968s-.969-.433-.969-.968c0-.535.434-.968.969-.968zm4.211.56l1.639-.981.605 1.011-1.639.982-.605-1.012z"/></svg>
					<span>Route</span>
				</Title>
			</TitleButton>
		</Wrapper>
	);
};

export default RouteSelector;
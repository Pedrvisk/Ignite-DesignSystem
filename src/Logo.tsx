import { SVGAttributes } from 'react';

// Interface: LogoProps
interface LogoProps extends SVGAttributes<HTMLOrSVGElement> { }

// Vite: Logo
export const Logo = (props: LogoProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width='122px'
			height='121px'
			viewBox='0 0 122 121'
			xmlSpace='preserve'
			{...props}
		>
			<image
				width={122}
				height={121}
				x={0}
				y={0}
				href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC7CAMAAADljHRmAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEUAAAAAv4AAs4AAsYAA tH0As3wAt4AAs3wAsn0As34Ar4AAtoAAtH0AtX0AtYAAs30AtYAAtYAAsoAAsoAAs30AtIAAuYAA qoAAv4AAs4AAsn4As34AtH8AtH4AtH4AtX8As34AtH4AtX8As30AtH8As38As34Asn8AtH4As34A s34As38As34Asn4AtH8As34As34AtH4Asn4AtH4As38AtIAAtX0As4AAs37///+ghSTjAAAAOHRS TlMACChIcFAgQGCAEDhYeDBoSBhgOHhYKBgQQIiQn7/fl7j3r9Dfx++3mNf31+ewp8+ooMDnv3Bg aDZKCcUAAAABYktHRDnXAJVAAAAACXBIWXMAAALFAAACxQGJ1n/vAAAAB3RJTUUH5goPERkN5k9G KgAABb1JREFUeNrVnXlXGlEMxcVlBKw41qUFrEutdt9ry/f/ZAUUmAdvuS8vy3j/Zji/48lJLkmc bG09R3W2d3b3rCEIqva7val2rTky1T94cdh71HP6q3cGewvsmQbWPCh2tXPUc9W3ZkJUHXQPe+s6 sqZKqn+wt4k9U21NFtUsBfZCqqzpwtjVTrcXU8ea0K9jX3C7emnN6NFaCgzpxJpzHbuKBHeLQ/2p vmM6taZdqlHfMZ1ZE881DW40SlaydwGe+o7J2AVU6RQYkqXhDdZ3TFaGN1rfMZ1bYGelwPaEOlDf MekaXrC+Y6r1sPH6jknJBfAEtysF7Oz6jkna8JLqOyZJw0uu75heSXEX1HdMMoa3sL5j4je8DPUd E7PhlUiBITG6ALb6jonL8LLWd0wchpe9vmMqNryawe2qqO0lVN8x0V1AZ2ASJSvV1OC2ipKVCIZX OQWGlOsCVOo7ppxQV6vvmGDDa5cCQ4IMb78dwe0q7QIM6jumuAsQ/olTpojhfb3fwihpKGJ42/v3 nivW9jqxhosrGupDa7qo4oa31ewJw9ti9qQLaC/7MFmQWssOGN6WskOGV5N9NEY/ibW9lNhHF28u J5MR+GnQ8CqwX11f3kxmQh9AO7yy7KO3t4/YU70Dn8HbXmLso4u7+0lD78HnMtpeIuzz4Hb1AXw0 p8PLzT6+/ngz2dAn9PGsDi8jezO4XX0GvyFzzsvDPg3uL5OgvoLfUuehM7BfLFJgSGhFym57FbGP r2/j2FPdo1+W3+Glso++uSkwpO/g91E6vAT2aXBfItgz/QC/kzTnzWS/SgW3K9TA0FYacPZwCgwJ dQHUOS/Ejga3qzsQnTznTbJ76jumnyA6fc4bYx/nBbcj2AUUrDQE2PODmxbqRXPeTfZ4fcckYHiT 7NPgLvpzPwk1vIVz3iW737xSBLuA0pWG4Ty4KSkwJNQFFC82drp4fcckZXhdzeemv3jJ5QzvUv3l aImX/Tca6sQoceemrOyShtczN+VklzK8obkpIztqeHNcQHRuysbObnjTc1Mu9j8gOmZ4K2huysTO Z3gz9qJY2JnaXrl7URzsaNsrYnhJe1EM7KgLCBreAXEpoJy92PA+kMAZ2MvbXgMqeik7gwuwYucw vEbsLIbXhB01vAkXYMGOtr1ShteAHXUBScOrz85neLXZOdteyuxo2wsyvLrsvB1eTXbuOa8iO/uc V4+92PDasaMuIKPDq8QuMufVYZdpe6mwo22v9GKjOrvUnFeencnwWrALznml2dkMrz47+mWkOa8o u/CcV5Jdes4ryC6x2KjDrjDnlWIXWmzUYFeZ88qwy895pdjhOW/hGxsF2CXnvMLsQoZXg112sVGS XXqxUZCdd86ryi6/2CjFrrHYKMTOMOe1YtdZbBRhV1psFGBXW2zkZ1dbbORn11lsFGHXMbwS7MKL jZLsXHNeA3bJtpcwu8Riow67quHlZWed8+qy/wU/J/eKcir7Kfp/ZYLvbSayn4H/Vyb6inIa+ywO EHbZV5SfU5Yj5ykPYBd+RflxPvtTHKTZpQ+V5LMv4iDFLn+oJJt9GQcJ9locPZt9lfLi7BqvKM9j b/7wibIrkGey180nI+xKN3ly2N04CLNr3eTJYF9LeUF2sVeUk9k34iDArnioBGXfjAM/u+ZNHpDd k/K87Ko3eSB27w8fH7vuoRKE3R8Hm+zal/kA9kAcbLCr3+RJs4dS3jq7/k2eFHs45a2xG1zmS7BH 4sBhN7nMF2ePxUGTvXzOy84eTXkNdqPLfBH2RMpbsptd5guz14knF+x2l/mC7Mk4eGI3PEIZYk+n vEd2NcMLsyMpb9izPkXtZYfiYGh+itrHjqW84cO2LbqHvT3HSLPZ23GMlMRuf4yUzG6Z8srYbVNe EbtxyithtzhGysRufHe3gF37Nz4je23NQWdv1UnyPHaD3/hM7Ca/8VnY/1m7wVbqP8EaLErxtLCd AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEwLTE1VDE3OjI1OjEzKzAwOjAwGS8NyQAAACV0RVh0 ZGF0ZTptb2RpZnkAMjAyMi0xMC0xNVQxNzoyNToxMyswMDowMGhytXUAAAAASUVORK5CYII='
			/>
		</svg>
	)
}
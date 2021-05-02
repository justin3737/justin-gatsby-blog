import styled from "styled-components"

export const Head = styled.header`
	display: block;
	position: fixed;
	top: 0;
	z-index: 100;
	padding: 24px;
	width: calc(100% - 40px);
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	-ms-flex-align: center;
	background: #fff;

	@media screen and (max-width: 820px) {
		width: 100%;

		&.is-open {
			overflow: hidden;
			height: 100vh;
			-webkit-transition: height .3s ease-in;
			transition: height .3s ease-in;
		}

		&.is-open > ul {
			display: block;
			position: absolute;
			top: 70px;
			width: calc(100% - 40px);
			right: 20px;
			-webkit-transition: all .3s ease-in;
			transition: all .3s ease-in;
		}
	}
`

export const HamburgerWrap = styled.div`
  display: none;

	@media screen and (max-width: 820px) {
		display: block;
    height: 16px;
    width: 24px;
    cursor: pointer;
    flex-shrink: 0;
    position: absolute;
    top: 32px;
    right: 24px;
	}
`

const Hamberger = styled.span`
	height: 1px;
	width: 24px;
	background: #000c2d;
	cursor: pointer;
	width: 100%;
	display: block;
`

export const HamburgerItem = styled(Hamberger)`
  &::before, &::after {
    content: '';
    height: 1px;
    width: 24px;
    background: #000c2d;
    cursor: pointer;
    width: 100%;
    display: block;
  }

  &::after {
    transform: translateY(14px);
  }

  &::before {
    transform: translateY(7px);
  }
`

export const Logo = styled.div`
  padding: 0 16px;
  font-size: 18px;
  line-height: 36px;

	a {
		text-transform: uppercase;
	}

	@media screen and (max-width: 820px) {
		padding: 0;
    width: 100%;
	}

	@media screen and (max-width: 414px) {
		font-size: 16px;
	}
`

export const ListMenu = styled.ul`
	flex-shrink: 0;
	z-index: 100;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		display: none;
	}
`
export const ListItem = styled.li`
list-style: none;

.list-link {
	display: block;
  margin: 0 15px;
  color: #666;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 500;
  transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
  line-height: 36px;
  opacity: .4;
  text-decoration: none;

	&:hover {
		opacity: 1;
	}
	
	@media screen and (max-width: 820px) {
		text-align: right;
    line-height: 40px;
	}
}
`
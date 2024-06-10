import { BiBriefcase, BiTargetLock } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdCorporateFare } from "react-icons/md";


export const NavLinks = [
  {title: 'Home', href: '#home'},
  {title: 'Practice Areas', href: '#practiceareas'},
  {title: 'Services', href: '#services'},
  {title: 'Reviews', href: '#reviews'},
  {title: 'About Us', href: '#aboutus'},
  {title: 'Contact Us', href: '#contactus'},
]

export const practiceAreas = [
  {icon: <BiBriefcase />, title: 'Labor and Employment', desp:'Far far away, far from the mountains, far from the countries'},
  {icon: <BsPeople />, title: 'Intellectual Proerty Law', desp : 'Far far away, far from the mountains, far from the countries'},
  {icon: <MdCorporateFare />, title: 'Corporate & Civil Litigation', desp : 'Far far away, far from the mountains, far from the countries'},
  {icon: <BiTargetLock />, title: 'Criminal Prosecution and Defense', desp : 'Far far away, far from the mountains, far from the countries'}
]

export const services =[
  {number:'90' ,title:'Awards', desp:'Separated they live in Bookmarksgrove right at the coast of the Semantics.'},
  {number:'3K' ,title:'Cases Wins', desp:'Separated they live in Bookmarksgrove right at the coast of the Semantics.'},
  {number:'2K' ,title:'Clients', desp:'Separated they live in Bookmarksgrove right at the coast of the Semantics.'},
  {number:'200' ,title:'Attorneys', desp:'Separated they live in Bookmarksgrove right at the coast of the Semantics.'}
]
import Image from 'next/image';
import styles from './TeamMemberCard.module.css';

const members = [
  {
    id: 1,
    name: 'Casey Warner',
    position: 'Executive Director/Partner',
    yearsOfService: '22 years at Northbrook',
    src: '/images/staff/casey.jpg',
  },
  {
    id: 2,
    name: 'Christine Sullivan',
    position: 'Resident Care Supervisor',
    yearsOfService: '40 years at Northbrook',
    src: '/images/staff/christine-circle.jpg',
  },
  {
    id: 3,
    name: 'Virginia Uebelman',
    position: 'Office Manager',
    yearsOfService: '45 years at Northbrook',
    src: '/images/staff/virginia-circle.jpg',
  },
  {
    id: 4,
    name: 'Kim Mcknabb',
    position: 'Human Resources',
    yearsOfService: '29 years at Northbrook',
    src: '/images/staff/kimmcn-circle.jpg',
  },
  {
    id: 5,
    name: 'Lauren Bianchi',
    position: 'Case Manager',
    yearsOfService: '',
    src: '/images/staff/lauren-circle.jpg',
  },
  {
    id: 6,
    name: 'Nick Gaglianese',
    position: 'Marketing/Admissions Coordinator',
    yearsOfService: '',
    src: '/images/staff/nick-circle.jpg',
  },
  {
    id: 7,
    name: 'Kim Mettler',
    position: 'Chef Dietary Manager',
    yearsOfService: '',
    src: '/images/staff/kimmet-circle.jpg',
  },
  {
    id: 8,
    name: 'Tyrone Session',
    position: 'Activities Director',
    yearsOfService: '24 years at Northbrook',
    src: '/images/staff/tyrone-circle.jpg',
  },
  {
    id: 9,
    name: 'Melinda Lupo',
    position: 'Head Nurse',
    yearsOfService: '',
    src: '/images/staff/melinda-circle.jpg',
  },
];

function TeamMemberCard() {
  return (
    <div className={styles.mainContainer}>
      <h1>Meet The Team</h1>
      <div className={styles.teamContainer}>
        <div className={styles.gridContainer}>
          {members.map((member, index) => (
            <div key={member.id} className={styles.card}>
              <Image
                src={member.src}
                width={250}
                height={250}
                alt={member.name}
              />
              <h4>{member.name}</h4>
              <p>{member.position}</p>
              <p>{member.yearsOfService}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TeamMemberCard;

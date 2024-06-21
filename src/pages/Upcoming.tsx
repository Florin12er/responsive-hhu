import Map from '../components/Map';

function Upcoming() {
  return (
    <div className="page bg-white text-black dark:bg-black dark:text-white">
      <section className="w-full max-w-7xl mx-auto py-16">
        <div className="relative flex justify-center mt-12">
          <img src="./img/upcoming_1.png" className="w-full max-w-3xl mx-auto" />
          <div className="absolute -bottom-20 w-full max-w-md rounded-2xl py-6 px-12 bg-[#E2E2E2] dark:bg-[#101010]">
            <h2 className="text-center">Education for poor children</h2>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto py-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div>//</div>
            <div>
              <p className="text2 font-['Roboto-thin'] dark:text-[#909090]">1455 Lickskillet Circle,</p>
              <p className="text2 font-['Roboto-thin'] dark:text-[#909090]">Epworth, GA, 30541, United States</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>//</div>
            <div>
              <p className="text1 font-['Roboto-thin'] dark:text-[#909090]">10:00 - 18:00, Thursday</p>
            </div>
          </div>
        </div>
        <p className="mt-32 text1 font-['Roboto-thin'] dark:text-[#909090]">
          t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
        </p>
        <p className="mt-8 text1 font-['Roboto-thin'] dark:text-[#909090]">
          optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto p-16">
        <Map center={[51.505, -0.09]} zoom={13} />
      </section>
    </div>
  );
}

export default Upcoming;

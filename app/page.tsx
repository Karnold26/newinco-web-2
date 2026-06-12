import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const stats = [
  { value: '45+', label: 'Years of Excellence' },
  { value: '2,500+', label: 'Placements Completed' },
  { value: '150+', label: 'Am Law 200 Firms Served' },
  { value: 'Worldwide', label: 'Reach & Connections' },
]

const testimonials = [
  {
    quote:
      'After 22 years at the same firm, I was nervous about making a move. They identified opportunities I never would have found on my own and shepherded the process with total discretion.',
    author: 'Senior Litigation Partner',
    firm: 'Placed at Am Law 30 Firm, Chicago',
    type: 'placement',
  },
  {
    quote:
      'I came to them as a seventh-year associate looking to make partner somewhere I actually fit. Within four months I had an offer that exceeded every expectation.',
    author: 'Corporate Associate',
    firm: 'Placed at Boutique M&A Firm, New York',
    type: 'placement',
  },
  {
    quote:
      'The candidates they sent us were genuinely pre-vetted — not just on paper credentials but on cultural fit. We hired two partners in one search cycle and both have been exceptional.',
    author: 'Hiring Partner',
    firm: 'Am Law 100 Firm, Washington DC',
    type: 'hiring',
  },
  {
    quote:
      'We had been trying to build out our energy practice for two years with no success. NorthCoast delivered three qualified candidates within six weeks. One is now our practice group leader.',
    author: 'Chief Talent Officer',
    firm: 'Global 100 Firm, Houston',
    type: 'hiring',
  },
]

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative border-b border-border overflow-hidden min-h-[90vh] flex items-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUWFRUWFRcVFxUVFRUWFRYWFxcXFRUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLi0rLS0tLy0tLS0tLS0tLS0vLy0tLS0tLS0tLS0tNS0tLS8tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD4QAAEDAgQEBAMHAgUDBQAAAAEAAhEDIQQSMUEFE1FhInGBkaGx8BQyQsHR4fEjUgYzYnLCFVPSRIKSorL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAuEQACAgIBAwIFBAIDAQAAAAAAAQIRAxIhEzFRBEEicZGh8GGBscEUMmLR4QX/2gAMAwEAAhEDEQA/AOrBTgoU+SUnonR3hw5Pn7oAJSuigLAqpxVVZMigLfNTc1Vk8IoKLHMCfP3VaFIBIepYzd1F0qAUwUrHqDLUNzFZkJkbD0KhYo5FcyJ+Sn1B6FMBEYrbcMpnDgbJPIg0KoYn5ZRnD+3X0VWsHH9kJ2JqiWRNkQBSPUI7aB3db1TfHuNfIYxuUmgbFOcLawJRaGFdu0BJtDSYLKokFXTQKgaBUbl6WUH1HaILr7LUGFUxhgn1ooXRkzH5Kk3DLY5I6Kq7XwiU1lsHi1M9zL2CnTbfRaDA4aMTjDvJ8UIeTyT0yGG8JgwtIX0hVG4EblGpUWjv5rGU4mixsO5nYIHKA0RvRIN7FRuWoJAITo/KCfkBLZlfCYMlNmKA2qRYo7XArvaOJSXuLMU+cpoUsqmzTX2GzFJEFNIshDdDiovsDAUsqI1qlkU7lOD9gYaVMNKG1xBhHam0QsiXsINKcNUmGUUNCxk2jojq1YINTx0RYCYOHVRbNKQIB/ZFp5t491IEdUpHaUOV+xKil2YS6nCA4HrPwRKZ6lS2h0L7ONwnFFqnn7pZwpeQnX9Bm0m9AitAUQ8dE8hLqoVDlQJTmEgl1ECRHKlkPRFa4KfNCeyByYDKeiYtVg1QoF6LQKTKz29lB2baArchIkdEtqHZR5TyfvKbMH3KtCFIFPqMngE2lCllCnCfKs2x2QaApAjqlCaFO9AOandOKihkTcpNTCkc4W9lDTsicxMXyvZSZwylH2GL0/2hCqMQXKlFGLmzTpVUUuWVSerdN6iWMqGVp2i3IUKz4EhQbUT51HT5NVmbVMgSHCynTJCi5o2EFOCrozcix6qRdG8qvnTSoeNMuOeSXBcZUlOX9YVek5J7pWLw8nSvUfBb7h5Tyq7aiI0qJYpI0h6iMgkpZk0JiFGjNOoSDk+dQlIuAR0RPKgmdOHoGf2Q6hdNrhC9NZlL1CSLZrKQeqTAd1aZolP0yiuCIZ3J8hM5T5kPMlmWXSfg06gXMnzIWZLMpeNi3DZksyDmSzKekLcNnT8xAzJ8/ZPpMNw/MT8xV+YeiXMKXRfkWxY5iWdVuYUuaU+jLyGzLOZKVW5pS5hT6T8hszGlObpgFML3aPOTIAKLqYRS1R5aKE2RFNqnZR5aQYihWSAUgUNSDkahsO56iXqRChKNQ2JypNlRBRAUnENhwpIZKjnRoPcPlSCDzU/NS0YbosNcSiKvTepCteO0ys5QZvDIq5DyolqhzUuap6bLeWIOoIPZQzor6iCXLWMWc85q+AjXpy9V5Ug5VoR1A3MKkyt1VYlSDknjtAstOy02rKJ6qmDKbPdZPBfY067ouSlKA2onLlPSL6qLAf2SzqtmSzI6IdRFjmp+aq2ZLMl0R9VFnmpc1V8ybMn0g6qLHOS5yr5ksyXRDqorwkQnhI913UclkYTwoOrsGrgPUKTXA2BBT1FsOmKllSypUFgymRMibInRNsYFNKnkSyIoLZCUgVPImyJ0hckZTSp5E+RFIOSAAUoCWVPlRQrYkfD0w5riAC621yBNgd9UDKYP7fmVqcMsBePVi4/VZlD5o6cONy5MyUpVvi9LLUnZ19vI6d1nVaobdxA8104mskFJe5zzbi2mFJUUKniWGwe0+RCmXDqPda6EOVkk6g14OhB8ipQjUWwkkkyNQ2JyolNKaUahsTzJSoylKNR7BMyUoeZOCloPcnKeVCU6Wo9iUp5UZWbg+Kh9Z1OBAnKZF8pg++vojQN6NRJRSlLUexzzeP1CfugWJ+72PUhVMTizVJzkzlIEBvnpNvNVsZiGPu1pbBIIBPR3c7g/UJ8DQFSoGkuaCYJaerReXCNT1RGVR2fH0OmeNbUv7LDmllMNc2GucHh3hJtLcuuk/kqbajS6Gg6+GHNnWNFpYnAN5cy6QJnO0yQ8i+uxGg29VlYejL4l2jt4Oo/0qsORSTaZlmwa1wadLE8rxgkSG2zsJ2NgJJPwWjU4yQbGn7g/JyDgMOx5DDEwAM1yRbo2+ui0MTDf8xlAOE5WlrRqRoMnc27ALmzepUZ6Vb/P0NceB637FOjx3xhrywA6m9h5ytYYynMZ2z0kb/JY/FuDUqtQcx9KnHh8DuWItDi0MkkyqlThlDDlwytqRB8TtSQLAlmlyfROHqccqSTt/ncl4Zpu6o3q/FKbYg5pMWIt5hVW8faSByzJncaDvC5+rXYB4aWQdOY0gTvGT4BZ9DiEiAw2jfqQOnce67IKLXKOeUnGXk7V/GG5g3Ib/emBA/NXftVPTmM/+Tf1XAurmHOcwjJFp1zEBPWrBsggzDjFp8IlPWHkbk/H3O+bXZ/ezePE29vNU6nGKYMAPPk2x8piVxjsS0Am9iRHXLEn4hGfimAW6SB1/ph5HpMJKMfd/YTcn2VfujrBxdpgCnUJ/wBv7p/+pi806gjTwk+/RcmwvcYbTc67haLlozR5wEIVC4S1pPicIAk+EiT5QZ9Ck3j8go5PH8HdYOvzGEuYGAOjxSSbDyWrgsseAtcQJgAz815sfCRJJFo6TpHrPwVx3ERhycokkGYMERq3yuPYLzvUej6km1J8/Q7ceRwitorg6b/GVNzm03REOgkBwtsDJ6lcbjKNVkGqHidC6YMdCVv0+N/aW5KtRtMFuYTuQMzW2HWEqldz2jND2EaFziCBro4Rouz0alhgsb5o4vUJZMja4OapGZ7An5KdNtQyQDpP11WxicQyn/6akMwOmcdP7nH4JUePMDAAwAhpygm0ZSBeNdBpvquifqHFcRJxemUny+DJpl82kH2RaXE6jTJcTBnxHS3dHxTm1KQa6plBYXAmnF2mwzmcwPUWlVOFcLpSXuqU3NAuHcwNExqW6frCT9VGm2vsyv8AElaUX9zdw3EyKcmDIkXBufXSVYwHEw+Q8ZXbdCP1/VctiMBTaWXpOzAOIaX+GXGW66wI9Qovq0wAG0aZIiTNQTBO2bXRTumrSY1jafxP8+h3AqtImR5b+ydrhA2nrY+y47DVjlflbTp5ssmX5ozfhJJ2PwVnhWMALua9zzAyw4kTebHtHRTb9jTpx9zqQAdCD5JctcVjeKuLhkLmjoH9fJUzP9zvj7LVR8nPJ0+D0DlpBq4GnSqEtDcxLogCdTFh11CkBVBdd7SxwBu6Z1nzsj4e1i+Lwd2XNGrgPMgIdXG02x4gZO1472XDVebUJ8VQ5TGrjEgn/ifZbtPBAFo5zXFwM5QZPhPX1HqocoRdNmkYTkrSDcUxjqgApuIF5ygk+p6LLFAtI8RB28MH0MLVZw6PFmt/uAmfTVD+2cvMQ94FpAcB5TbutNkuxHTXebRe4dxARlqPvo0kETab7fwrrMZRIB5rb3uY+C588XJN6lTp98H/AIroqXDczQ7n6gH/ADOo/wBq5s2aGL/b3/PB0YMXVvV9jlq+Ae0CQ4BxLmyHQfvmRLujm+49DcLpFj2uNgDMmBlGQXJDj39/VdPhcJTDQ53jcQRkNN1pncCTqPf3LVo0nMDQWDK77zWhrnQPEbCYA1nsvDn/APQlGOsotp2ro9lYYOXBk4xrjScLjrmzX/qTb9ysDD0oeNPxb/6h/qPy9l2NXC0z4eYALEmBeYI2mdfQLHx2FpMaHB03Ol4E7wB06rp9B6hf6+X4M/VY4uNopDiIokEtcSQQC12WD4b91UdxB1QiTVkmCC5pH3m7RpaUHjQa4Nyu67f7b/BZmGZD23/ED90f3heqsGPZ5K5/PoeTLNkXw+x0WOqubmBr53tJvmBJ0sBA0jdZVPiNeowy9zpidHD73kq2PrO51Q9XvvAOpI1i9t1LB0iKfr0H96zw4IxinJK/l2NMmeU5OMeFz7k6rqhs42mJIiBA7aLHp1nWAdA8/Xr2WvWZ97zO3YLKo4J2QOPWPXVdUaOXJtZ0WCxjqYe6xA5ZOYB1nBoNp6EqGKc6q6C8Ne6fFGRgAuSb2/hR4UwuD8xBnljxEHMA4W8XYQneCWkSzPBuWg2vN8h2WOqUr9zo2bir7f8AoXE4TIOYazSBq1pcXCauYy2dhAPmNlUZh35YzuJIdlID+jHxrrlBHqtLltOpbGZ5d4QQQKgJk5by0sHeN4UmuyiXVA10uLIZIALWmRYQctv4UKTRpKCfyBNNRocGu0c5w8M3ggiSem3yWPiHRUgOfHinr/mCYv0WxU4tLy08tjWuIA5XMLrwS6XepTUOItDRmw9FxhxksAjxuAFjuIKiCld0XOUHxZXxDs2UtcYuDE6yANOilXxJa4iGu8RnM0uMAgw2/QgK87i72+KKbIax0lpcDPhykz0Wdi8QwkPY9pcXEkhpaRp91wPbcHRNOV1Jf3/QnrVp/n1Djh1N7WPe4ggAwDABgbH+UXn8mk2nTMgQATrdwNz7+6EyTTa/PM5tPw3I8Vrnv3TZZiHO0vf+LrdT4M3hbfzNLidcGIaDEzmBtYH69Vz9Qd/wj5hblPAmJPM8UgF7co9DJhYrcS1zg0EyYbezddb7rJzTfBtGOq59wrA+owNMQxhygGLSLum3qhOBbSPic0OdBAgh+UNN4dt63CvYXEtDKzHmIpmLG7pbHbSfZV8Rii+iwZiS172gdKeRkC20yhOV6pcX/V39TKSVW3zT/wCiDsH46QvLgwxadB+t7bJ8NQ8by1pqNaDAd4QZIHiAMjXrsrTH0efScahAaKObwEwWsbIn0d7KvwmuWc0sLmvLP6cC5dzGzFrWlLqTceE+y8ru/wCvcesNv3fjwQxFEsY3MT4iL2gABptDoOv8J2sDXwC6cn3TI/DY2drG0KeNd/RptMh+ZxO8Ny0w0+sG20IoY19bwvj+kyDBEuFNkibRv7aK4ZH3f6/Z0TOKfC/4/wAGUH+Jm929/hK0Kbi4uzMaAGuyw0C9jJJEKphWs5jDUJDQWzAJOi0+Iuol39Go8DI8mxB2ht3X9FbyfEo0/o6+pg4VcuPqUaWL5bQYbMMMuAJlpabfnruqtHGmpVcSQA94Jiw+KhWlzQ2Xk5BIM2sLi+n6KHDqGV7SZib9hHxVqEf9q5Mpzk2lfBqYGhmcSag8LmzLgAbHYmD09UqBa8hjgLkSWiHT1np7p8NWaA8TEvaRFoAmfxDdW/8Apz6RaX28QMWPfZ3b+Fm5JS5/Y3gm1wUsdh+WQGk3EuMuiZMRIGwVStUZfxVC4Obl0ynrN50VvG1g872tEEbnuevVZ76Qzf8AuH/5Wl2iGqZ0OAqPeYED+izQOaT4nXlpPvbyWk7BE3BfcA2cYki/4TvKyOE4nI6R/wBloJta5vdo/PXValfjDmnKDYBv/b/tHVcct0/hR6GLSviKFbH1aha9tRzRAygvJMtMFxtaXNn2Sp8Rc1rhLdSc9y6TG++nxKwxiZgbCdO5JI8rqFMkmCJn4ReQtOlCqo5lmlGVmnjOJugAuJ69PT4KtTx+YZSbSDF4gW0+tUCq0fdLZ3kTa6z6jw0kNvvJ1VpRMpZJM2vtXLBcWi2xG3TRTocUpuZm5VMOm/gb7iywRUL/AA3M9NVOHNbdpEdQVapszcn7G7Q4kyfFSpnvkb67K3Q4vRLjSc0hlg3JlaCcwI/jzXJUat9J+v3R9YMx+yjJjUlRePLKLs6zjGGbSzZTJDRcPBBJi4EadVg88EBWGYmQJDXEjxZmtve2yq4uoR+BgHk34WRig4xqTtlZsqlLhUhmvzTcDXXsCfy+IQ2Yj3+o+u6q5j8/zUWTpuSrbMrOs4fhWmnndVpRoWkmbnNHrk+SHicpaf61MT0Do/CBMdgufa1waj1MPLTleIAbM2MkXht5AIIny6rn0d25fY6ll+GtSzXpjMXS10jNY2l3/IdOyv8AB6FKpOerkgOuQXSbEAwqGFwtR7Yu0H7ovdxgAAekJNoOYJgz1mfe6t3VXySp09qOjxdPDBuUVmVbfdc17G2k6zrr6wsenkD8uVjRmuRLgB0v94LLyvu4gx1uhisojiq7k3+fpx9jSedyd0kd1wQB2drQyMpOjYEHNa2tkWrhqdOq+nWLXNJzTTbvc2dsL6dguV4ZjHNuHsbH9wBn/wCpRaz/AMQqhxJj7xaZnYCLLk/xprI2pUv7Op+pi4rg6HAcOaSSyuGiTEtbTiRbsQYjT8S4/jlB7H5iWk5iZbGsmTYDdbtbHPyNa6nBaILp+9edvysue4liM77zYEyJFraXWuGGVSbm7XyX8owzZIONRLnB25xM3dpci9tYFtPirGJw4hsuykjMN7Oka9PCVVoyGSNIMG158vq6zalc55m86iNfRdKu+5zb8Uy/iaAzQ2TGsE3OpVrB1GNfZu8ND2tfY9QbErDrYg769UTCYoBwcQHdjMHbZVJNqiVJJnSYWi8VHEtYSRLf6LXNv1H4bo+K4PVcw1HGmyDADGBhnKSNAIFo9UsJUBpSKjg4i7R2mIMIvDqlRhzVX5gIOXqbkwXDb9lySxZttouK/k64ZcWtSTOdNDKW5wbkjTWCRY76LSwOFpmp94WizxI2k30iVQ4txguqlzD+ImLHrAn1Puk6s6BUAOZxnf1MR2K6qlJcujn3gpcKzTxtBtPMG1SXRoGNbLS68kHS6ysMHVCXMYXZJJIGgvrGg/dBqcQquq80lxdET20hTxlRpcHhuUkDPceI7uFoE9E4KSVPv+fInJNSdrt4/LC47COAa9rgQ8mwImW/z80ThmHfGcNAiJJEGH6H1+So4bESYdpP0VqYLiDGZmvpzeQZM22iwMlDjLWrHjnFStmsyl9nJDi0kmJ8JYYJEtJGgJJ0uq+J4aKmZ55YOQ1JaQD4QdAQNge/usjifEmwAzWXEkgWBcSAI9PqFTOPLrOv4coOnlNvF0XP0JLm+fdnQ/UQ8G3wqrTpn+ozNoZ1ABFm3+rrYZy3CeWwz11XJF7geo37Ir8WZP7D4KMvp9ndlY/VUqa+xkMY7YW1nt9ELQw9OLm2veY/lXuH4EfiI7ReNv0RsXhxBDTv+krdM59SicLJEzpPwJi6q8R4SDJaSNABAA7zdbD2iCeh+QSlpifNVZLimcxhOF1CA4ug7ACfjPmFqYrCl1OHVMQ9waIDnNyAhunXLsrwwjH2JtOvnKavgKYkZyQNO9rpcd2TpXY5p2EyuMzqACfIHr3RWAxYGwk29FrPwlMjTSDpaxurlHIG2FvZNyBQMzD1HeHOHWBtJNgP7p89OyhxCqTIDvDEgSfhK2fszDA2MfkmxfC2BpDXSI326BGzHoYXCcSWS4CQdjp8VLFYk1TmiMtvCNptJ9grTOGh0yYtHcnp5qbOH2yzDYPkdoISsNQNakWEG9237EbA95n0UaBObTuo1mERExtPnCWBoZ2kl8EugC+lr/H4J7BRdqYiZv3QnY4gEA+E37zHXyKp16YDZDiXDM3SxgwDM/Uj0r02Et339glwO2jUHEHFop5vCPFGwJ3hV6rQm+wkEBrploJ2vJtr9Sh1sK8Ed5Suh8vuSFYbbKbKwOouqL2kEg2U6VifT2SsfY0DiHG1ygSehQRW77/kiUMRMg7fFPZhwx2BxsEP7O8u+6fYq/RoMJaS4tBOup0tv1gKTqTuY9rXyG6EzcxPoq3I1KeMwZIkDbSO3TqqlLCkRMq+ys64cCCDp8E7qW87dTc9AeqSkDirB4XEuYTlKuPxznC7lmQAUQT0PdIpUNUN+qcvNoBMkDQqRYJ1P5K9gcACJ5xbrYNJt7gbK1ImUX7GXUpPDoyujrDv0Qarnn8L+n3Suzw/+GXVD4cTaJuHb7TmsUTE/wCEXsAnE/B0esOVbLyZ6S8HEYYO/tI9CpVnHNoSN4B+pWtiME5pLc8wCRrsEOjhXHNmqZcpvYk+yTkCiZpJc4w1wb1Iujtolt9Yg3B9oWpS4YXNzCsNJ0N7aC+uqhQ4e7mOZzBIm40MGJHZLYpRKTqpmQSe0Hf+EGrMmAT3yn8wtZ/DHU3HNULJykGJzSYtDtpB9VuN/wAHViAftGv+l3/khtBUvBlYd8B3mgVq0AX6H2ugCtAN9z7Efoq9R2YGTqszYI3ElwN9Qo0sRaZJIAHqFWAi4J1+vkq73RPw+Sdk0a9LFbaGCVKlXN5Jvod5WLTxJaAYnv8An8FYZXIHoUWIvtqAhxnaD8EWi4ARY/R/dZbahg+/dPRrxIJTsRsfaJFkSniLRv8AzPyWU3Eaz6d1ZpVIj61ulZVmiaokmJmISoid/wBvqVnVqhudrddDH6qVLE/X19XSCy06kNd9I7fUINAGmczbOgx2kR+qYVj3+jH5KtjK8GPb33QFj8mW2mTe/W/5fNEoYU2BAggz1sVXbibD0PurQr+n6IAOaIG0WgIP4hOwn69k7awOvp+U+iC58GTH86pMaFjaYcNLfsqTqEeIdPl0Vs1AQb/wp8wEbW+CQzGLiJjzUmuj4H9lCv8Ae8lZpU82+0z8kCLQq+Edr+xBj4wiuqAa233+epQKjYJaI6jpOyZ7j1/cHVAEnGTJcO/6qtWqxAB79knEzbf6/ZRfS7+h76pgDdVMwrAcTA33THDbxeLJFpbB8wRb4dUJioQddHp19j9bquw3nQHVRdrroPzTCzZw3E3xkmJPXra4/RdHxHiX9AePxDW8mAREn1XE4eRHUn12v8VbxTnPaQ2Q29jJHqfVOwsM+tnkiAbn01630QqGJdDzMgkl4cRDnEiJ6fsFRw1Vxy9xeFcoYXmPY0EQYnzzQPi5OyS/gKb30nf25TlJNwcs7joo8WpGk5hbMlpmZNwbH1J90TCUstOu/M0ADKRO7mgGOt1S4vXccmaCIzNi3hO3lZKx1wF4niHFrCRYHXX2PpK6TD/4nytAIJgDTTsuJdiS8AO2RnBwsCEu5SZWdXa52QXO4F/c9YTUSTboN/zSSWadmiB8syBOp7q39n290kk2JERQpkECdCPdD+ygCJOnRJJKxUQfRDYgk26Ks4n4hJJWuxDQfCzAnWY2uLz8iiYfEwcp6mfIGR+SSSVgGr1dx/IlC5m8a6FOknYB8O+/p87fuq9Z8vv1+CSSQwdJpt5C58v1Kt3t7E/XonSRY0iDgQ62nTe3VDaHEzE9P46JJKbBIJScJ06+f7K08wNPbdJJJsaRROD5riGzPkTreyangXskE/Me6SSSYNFjDtBBkGbaydokeqhWowRAKSStEkKuHcHAEGTfSPmlUpFpt6JJKmBKm5x029NUao6bFsx7JJKCh62EgAtm2u8mO6pubOgvuI0/ZJJOxNCpVBr6fqfroil2WOhGnrF/ikkhCKeHqwGkajMm+0RJ37JJIJHo4gifE68SJN77otSvmIkkgRAJmI80ySBiJ16k+6K2sIukkgZ//9k="
            alt="Washington DC aerial"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80" />
          <div className="relative mx-auto max-w-7xl px-4 pb-40 pt-16 sm:px-6 sm:pt-24 w-full">
            <p className="mb-12 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
              X: 38.8972&deg; &mdash; Y: -77.0369&deg;
            </p>
            <p className="nc-eyebrow mb-8 !text-white/60">Est. 1970s &mdash; Washington, DC</p>

            <h1 className="nc-display max-w-4xl text-6xl text-white sm:text-7xl lg:text-[7.5rem]">
              Your Navigator
              <br />
              <span className="text-primary">In Law</span>
            </h1>

            <div className="mt-12">
              <p className="max-w-md text-pretty text-base leading-relaxed text-white/70">
                Pinpoint legal recruitment for the world&apos;s most demanding
                firms. We listen. We research. We analyze. We place &mdash;
                precisely.
              </p>
            </div>
          </div>
        </section>

        {/* Stats ticker */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-4 sm:px-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-6 first:pl-0">
                <span className="font-heading text-xl font-extrabold text-primary">
                  {stat.value}
                </span>{' '}
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-border overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
            <p className="nc-eyebrow mb-8">Client Voices</p>
            <h2 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
              The Record
              <br />
              <span className="text-muted-foreground">Speaks</span>
            </h2>
          </div>
          <div className="mt-16 pb-24">
            <div
              className="flex w-max gap-6"
              style={{ animation: 'marquee 35s linear infinite' }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex w-80 flex-shrink-0 flex-col justify-between gap-8 border border-border bg-card px-8 py-10"
                >
                  <p className="text-sm leading-relaxed text-foreground/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-primary">
                      {t.type === 'placement' ? '— Placed Lawyer' : '— Hiring Partner'}
                    </p>
                    <p className="mt-2 font-heading text-sm font-extrabold uppercase tracking-tight text-foreground">
                      {t.author}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {t.firm}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.4fr_0.6fr]">
            <p className="nc-eyebrow">The Approach</p>
            <div className="max-w-2xl space-y-6 text-pretty text-lg leading-relaxed text-foreground/80">
              <p>
                Whether you are in search of a new professional home, or
                expanded expertise for your firm, we have the background,
                experience and market information to guide you. We have moved
                individuals and practice groups, led law firm mergers, and
                placed corporate counsel.
              </p>
              <p>
                The members of our firm have seen the legal world from all
                sides &mdash; as practitioners, support staff, in-house
                recruiters, and marketing professionals. We are insiders with
                inside information, and we provide as much support as is needed
                to ensure success.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="nc-eyebrow mb-8">Ready to Begin?</p>
              <h2 className="nc-display text-6xl text-foreground sm:text-7xl lg:text-8xl">
                Let&apos;s
                <br />
                Connect
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 self-start font-mono text-sm uppercase tracking-[0.18em] text-foreground lg:self-end"
            >
              Start a Conversation
              <ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
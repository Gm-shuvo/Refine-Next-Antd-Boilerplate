import { question } from "@utils/resourceProvider";
import * as lucideIcons from "lucide-react";

export const Icons = {
  ...lucideIcons,
  logo: (props: lucideIcons.LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),

  videoFeed: (props: lucideIcons.LucideProps) => (
    <svg
      viewBox="0 0 27 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}

    >
      <g id="Group">
        <path
          id="Vector"
          d="M9.14384 0.00467085C11.0881 0.00467085 13.0323 -0.00583856 14.9766 0.00467085C16.5845 0.0151803 17.6985 0.782368 18.1399 2.11706C18.2555 2.47438 18.2765 2.8317 18.2765 3.21004C18.2765 6.36287 18.2765 9.51569 18.2765 12.6685C18.2765 14.6653 17.11 15.9475 15.1342 15.9685C11.1196 16.0105 7.11552 16.0105 3.10093 15.9685C1.20923 15.9475 0.0216699 14.6548 0.0216699 12.7736C0.0216699 9.59977 0.0742169 6.43643 0.000651032 3.26259C-0.0308772 1.65465 1.08312 0.00467085 3.25857 0.00467085C5.22383 0.0151803 7.17858 0.00467085 9.14384 0.00467085Z"
          fill="white"
        />
        <path
          id="Vector_2"
          d="M26.9982 7.96046C26.9982 9.4528 27.0087 10.9346 26.9982 12.427C26.9877 13.9613 25.611 14.8021 24.2553 14.0664C22.805 13.2782 21.3967 12.4375 19.9674 11.6282C19.7047 11.4811 19.5996 11.2814 19.5996 10.9872C19.6101 8.96936 19.6101 6.96207 19.5996 4.94426C19.5996 4.64999 19.7257 4.46083 19.9779 4.31369C21.3757 3.51498 22.7629 2.69524 24.1712 1.90704C25.5795 1.11883 26.9982 1.97009 26.9982 3.58854C27.0087 5.05986 26.9982 6.51016 26.9982 7.96046Z"
          fill="white"
        />
      </g>
    </svg>
  ),


  videoView: (props: lucideIcons.LucideProps) => (
    <svg
      viewBox="0 0 27 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}

    >
      <g id="Group">
        <path
          id="Vector"
          d="M9.14384 0.00467085C11.0881 0.00467085 13.0323 -0.00583856 14.9766 0.00467085C16.5845 0.0151803 17.6985 0.782368 18.1399 2.11706C18.2555 2.47438 18.2765 2.8317 18.2765 3.21004C18.2765 6.36287 18.2765 9.51569 18.2765 12.6685C18.2765 14.6653 17.11 15.9475 15.1342 15.9685C11.1196 16.0105 7.11552 16.0105 3.10093 15.9685C1.20923 15.9475 0.0216699 14.6548 0.0216699 12.7736C0.0216699 9.59977 0.0742169 6.43643 0.000651032 3.26259C-0.0308772 1.65465 1.08312 0.00467085 3.25857 0.00467085C5.22383 0.0151803 7.17858 0.00467085 9.14384 0.00467085Z"
          fill="white"
        />
        <path
          id="Vector_2"
          d="M26.9982 7.96046C26.9982 9.4528 27.0087 10.9346 26.9982 12.427C26.9877 13.9613 25.611 14.8021 24.2553 14.0664C22.805 13.2782 21.3967 12.4375 19.9674 11.6282C19.7047 11.4811 19.5996 11.2814 19.5996 10.9872C19.6101 8.96936 19.6101 6.96207 19.5996 4.94426C19.5996 4.64999 19.7257 4.46083 19.9779 4.31369C21.3757 3.51498 22.7629 2.69524 24.1712 1.90704C25.5795 1.11883 26.9982 1.97009 26.9982 3.58854C27.0087 5.05986 26.9982 6.51016 26.9982 7.96046Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  gitHub: (props: lucideIcons.LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  objectDetection: (props: lucideIcons.LucideProps) => (
    <svg
    viewBox="0 0 24 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <g id="Group 35987">
        <g id="Group">
          <path
            id="Vector"
            d="M12.439 14.4999C13.3171 14.5493 14.3932 14.4256 15.4693 14.5741C18.1163 14.9328 20.12 17.1097 20.1695 19.769C20.1942 20.6348 19.8108 21.3151 18.9821 21.6985C17.9802 22.1686 16.9041 22.3788 15.8157 22.5025C13.045 22.8117 10.2868 22.8117 7.52851 22.3294C6.79875 22.2057 6.08136 22.0078 5.41344 21.6985C4.59709 21.3275 4.18892 20.6348 4.23839 19.7443C4.41156 16.7881 6.77401 14.537 9.74254 14.5246C10.5713 14.4999 11.4123 14.4999 12.439 14.4999Z"
            fill="white"
          />
          <path
            id="Vector_2"
            d="M12.1917 12.608C9.47059 12.608 7.26893 10.394 7.2813 7.69755C7.29367 5.02588 9.52007 2.82422 12.2041 2.82422C14.9129 2.82422 17.1393 5.03825 17.1393 7.72229C17.1393 10.4311 14.9253 12.608 12.1917 12.608Z"
            fill="white"
          />
        </g>
        <g id="Group 35985">
          <rect
            id="Rectangle 3964"
            x="1.91211"
            y="1.91211"
            width="20.1765"
            height="23"
            rx="1.5"
            stroke="white"
          />
          <rect
            id="Rectangle 3965"
            x="19.7656"
            width="4.23529"
            height="4.23529"
            fill="white"
          />
          <rect
            id="Rectangle 3967"
            x="19.7656"
            y="22.5879"
            width="4.23529"
            height="4.23529"
            fill="white"
          />
          <rect
            id="Rectangle 3966"
            width="4.23529"
            height="4.23529"
            fill="white"
          />
          <rect
            id="Rectangle 3968"
            y="22.5879"
            width="4.23529"
            height="4.23529"
            fill="white"
          />
        </g>
      </g>
    </svg>
  ),
  Question: (props: lucideIcons.LucideProps)=>{
    return Icons.ShieldQuestion(props);
  }
  
};